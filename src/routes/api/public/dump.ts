import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/public/dump")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const range = url.searchParams.get("range") ?? "경험정리!A1:L40";
        const res = await fetch(
          `https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets/14vEhUvQAoFGUH1zjHUK3UI7HMXzRy1n0W3Ji4huwP5c/values/${encodeURIComponent(range)}`,
          {
            headers: {
              Authorization: `Bearer ${process.env["LOVABLE_API_KEY"]}`,
              "X-Connection-Api-Key": process.env["GOOGLE_SHEETS_API_KEY"] ?? "",
            },
          },
        );
        return new Response(await res.text(), {
          status: res.status,
          headers: { "content-type": "application/json" },
        });
      },
    },
  },
});
