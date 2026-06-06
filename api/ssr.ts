export const config = {
  runtime: "nodejs18.x",
};

export default async function (request: Request) {
  const serverEntry = await import("../src/server.ts").then(
    (m) => (m as any).default ?? m,
  );

  return await serverEntry.fetch(request, undefined, undefined);
}
