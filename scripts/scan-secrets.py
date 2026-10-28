import os
import re

patterns = [
    re.compile(r"(?i)(password|secret|key|token|credential)\s*[:=]\s*[\"'][A-Za-z0-9_\-\/\+]{16,}[\"']"),
    re.compile(r"-----BEGIN (RSA|OPENSSH|EC|DSA) PRIVATE KEY-----"),
    re.compile(r"(?i)ghp_[A-Za-z0-9]{36}"),
    re.compile(r"(?i)github_pat_[A-Za-z0-9_]{82}"),
    re.compile(r"(?i)SG\.[A-Za-z0-9_\-\.]{66}"),
    re.compile(r"(?i)xox[baprs]-[0-9]{12}-[0-9]{12}-[a-zA-Z0-9]{24}"),
    re.compile(r"(?i)AIza[0-9A-Za-z-_]{35}"),
    re.compile(r"postgres(?:ql)?:\/\/[^:]+:[^@]+@[^/]+\/[^?]+"),
]

exclude_dirs = {"node_modules", "dist", ".git", ".netlify", ".vercel"}
matches = []

for root, dirs, files in os.walk("."):
    dirs[:] = [d for d in dirs if d not in exclude_dirs]
    for file in files:
        if file.endswith((".png", ".jpg", ".ico", ".svg", ".lock", ".webmanifest")):
            continue
        p = os.path.join(root, file)
        # Skip this scan script itself
        if "scan-secrets.py" in p or "package-lock.json" in p:
            continue
        try:
            with open(p, "r", errors="ignore") as fp:
                for idx, line in enumerate(fp, 1):
                    # Ignore placeholder lines
                    if any(ph in line for ph in ["REPLACE_WITH", "your-", "example", "PLACEHOLDER", "dummy", "test-secret"]):
                        continue
                    for pat in patterns:
                        m = pat.search(line)
                        if m:
                            matches.append((p, idx, line.strip()[:100]))
                            break
        except Exception:
            pass

print(f"Total potential secret matches: {len(matches)}")
for m in matches:
    print(f"  {m[0]}:{m[1]} -> {m[2]}")
