import { Request, Response, NextFunction } from "express";

/**
 * RBAC Permission Map
 * Values define the roles authorized to perform the given action.
 */
export const PERMISSIONS = {
  VERIFY_RESOURCE: ["ADMIN", "SUPER_ADMIN"],
  VIEW_USERS: ["ADMIN", "SUPER_ADMIN"],
  MANAGE_QUIZZES: ["ADMIN", "SUPER_ADMIN"],
  MANAGE_REPORTS: ["ADMIN", "SUPER_ADMIN"],
  MANAGE_SUPPORT: ["ADMIN", "SUPER_ADMIN"],
  MANAGE_CONTENT: ["ADMIN", "SUPER_ADMIN"],
  ASSIGN_ROLE: ["SUPER_ADMIN"],
  BAN_USER: ["ADMIN", "SUPER_ADMIN"],
  DELETE_USER: ["SUPER_ADMIN"],
  VIEW_AUDIT_LOGS: ["SUPER_ADMIN"],
} as const;

export type Permission = keyof typeof PERMISSIONS;

/**
 * Middleware: Enforces role-based permission checks.
 * Requires user to be authenticated (req.user exists).
 * 
 * @param permission - The action to check authorization for (e.g. "MANAGE_QUIZZES")
 */
export function requirePermission(permission: Permission) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ code: "UNAUTHORIZED", message: "Authentication required." });
    }

    const userRoles = (req.user as any)?.roles || ["USER"];
    const allowedRoles = PERMISSIONS[permission] as readonly string[];

    const hasPermission = userRoles.some((role: string) => allowedRoles.includes(role));

    if (!hasPermission) {
      console.warn(`[AUTH] Unauthorized access attempt by ${req.user?.username} (${userRoles.join(", ")}) for ${permission}`);
      return res.status(403).json({
        code: "FORBIDDEN",
        message: "You do not have permission to perform this action."
      });
    }

    next();
  };
}
