export const config = {
  runtime: "nodejs",
};

function createFetchRequest(req: any) {
  const host = req.headers?.host ?? "localhost";
  const url = req.url?.startsWith("http") ? req.url : `https://${host}${req.url}`;
  const headers = new Headers();

  for (const [key, value] of Object.entries(req.headers || {})) {
    if (Array.isArray(value)) {
      value.forEach((v) => headers.append(key, v));
    } else if (value !== undefined && value !== null) {
      headers.set(key, String(value));
    }
  }

  const body = ["GET", "HEAD"].includes(req.method?.toUpperCase()) ? null : req;

  return new Request(url, {
    method: req.method,
    headers,
    body,
  });
}

export default async function handler(req: any, res: any) {
  try {
    const serverEntry = await import("../src/server.ts").then(
      (m) => (m as any).default ?? m,
    );

    const request = createFetchRequest(req);
    const response = await serverEntry.fetch(request, undefined, undefined);

    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      if (key.toLowerCase() === "transfer-encoding") return;
      res.setHeader(key, value);
    });

    const buffer = await response.arrayBuffer();
    res.end(Buffer.from(buffer));
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.setHeader("content-type", "text/plain");
    res.end("Internal Server Error");
  }
}
