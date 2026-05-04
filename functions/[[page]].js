export async function onRequest(context) {
  const { request } = context;

  const ip =
    request.headers.get("CF-Connecting-IP") ||
    request.headers.get("X-Forwarded-For") ||
    "unknown";

  const blockedIPs = new Map([
    ["48.48.84.84", "OH MY GOD WHY DID YOU SPAM SCAM LINKS IN CHAT"]
  ]);

  if (blockedIPs.has(ip)) {
    const reason = blockedIPs.get(ip);

    return new Response(`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Access Denied</title>
</head>
<body>
  <h1>Access Denied</h1>
  <span>You are seeing this message because the administrator has prevented you from accessing this website or webpage.</span>
  <br>
  <b>Note(s) from administrator:</b> <i>${reason}</i>
</body>
</html>`, {
      status: 403,
      headers: { "content-type": "text/html" }
    });
  }

  return context.next();
}