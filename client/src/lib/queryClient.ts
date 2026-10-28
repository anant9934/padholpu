import { QueryClient, QueryFunction } from "@tanstack/react-query";

// ── CSRF Token Reader ─────────────────────────────────────────────────────────
/**
 * Reads the XSRF-TOKEN cookie set by the server.
 * Handles URL-encoded values and whitespace safely.
 */
function getCsrfToken(): string {
  try {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const eqIdx = cookie.indexOf("=");
      if (eqIdx < 0) continue;
      const key = cookie.slice(0, eqIdx).trim();
      if (key === "XSRF-TOKEN") {
        const raw = cookie.slice(eqIdx + 1).trim();
        try {
          return decodeURIComponent(raw);
        } catch {
          return raw;
        }
      }
    }
  } catch {
    // ignore — cookies unavailable
  }
  return "";
}

// ── Typed API Error ────────────────────────────────────────────────────────────
export class ApiError extends Error {
  constructor(
    public readonly status: number,
    message: string,
    public readonly refId?: string,
  ) {
    super(`${status}: ${message}`);
    this.name = "ApiError";
  }
}

// ── Throw helper ──────────────────────────────────────────────────────────────
async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    let message: string;
    let refId: string | undefined;
    try {
      const body = await res.clone().json();
      message = body.message || body.error || res.statusText;
      refId = body.refId; // Forward server-generated reference ID to client
    } catch {
      message = (await res.text()) || res.statusText;
    }
    throw new ApiError(res.status, message, refId);
  }
}


// ── Optional Base URL for direct cross-origin API mode ────────────────────────
export const API_BASE_URL: string = (
  (import.meta as any).env?.VITE_API_BASE_URL || ""
).replace(/\/+$/, "");

/**
 * Resolves API path to full URL if VITE_API_BASE_URL is set,
 * otherwise preserves the path for same-origin proxying.
 */
export function resolveApiUrl(pathOrUrl: string): string {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  if (API_BASE_URL && pathOrUrl.startsWith("/")) {
    return `${API_BASE_URL}${pathOrUrl}`;
  }
  return pathOrUrl;
}

// ── Core API request helper ───────────────────────────────────────────────────
/**
 * Makes an authenticated, CSRF-protected API request.
 * Throws on non-2xx responses so callers can rely on onError handlers.
 */
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown,
): Promise<Response> {
  const isFormData = data instanceof FormData;
  const headers: Record<string, string> = {};

  if (data && !isFormData) {
    headers["Content-Type"] = "application/json";
  }

  // Attach CSRF token for all state-changing requests
  const csrfToken = getCsrfToken();
  if (csrfToken) {
    headers["x-xsrf-token"] = csrfToken;
  }

  const targetUrl = resolveApiUrl(url);
  const res = await fetch(targetUrl, {
    method,
    headers,
    body: data ? (isFormData ? data : JSON.stringify(data)) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

// ── Default React Query query function ───────────────────────────────────────
type UnauthorizedBehavior = "returnNull" | "throw";

export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const rawPath = queryKey.join("/") as string;
    const targetUrl = resolveApiUrl(rawPath);
    const res = await fetch(targetUrl, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return res.json();
  };

// ── QueryClient singleton ─────────────────────────────────────────────────────
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: true,
      staleTime: 10 * 1000,        // 10 s — keep data fresh
      retry: (failureCount, error: any) => {
        // Don't retry auth/validation/not-found errors
        const status = parseInt(String(error?.message || "").split(":")[0]);
        if ([401, 403, 404, 422].includes(status)) return false;
        return failureCount < 2;
      },
    },
    mutations: {
      retry: false,
    },
  },
});
