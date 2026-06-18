import { createFileRoute, notFound } from "@tanstack/react-router";
import { getExperience } from "@/lib/experiences";

export const Route = createFileRoute("/api/public/pdf/$slug")({
  server: {
    handlers: {
      GET: async ({ params, request }) => {
        const exp = getExperience(params.slug);
        if (!exp?.pdf) throw notFound();

        const origin = new URL(request.url).origin;
        const upstream = await fetch(new URL(exp.pdf.url, origin).toString());
        if (!upstream.ok || !upstream.body) {
          return new Response("PDF not found", { status: 404 });
        }

        return new Response(upstream.body, {
          status: 200,
          headers: {
            "content-type": "application/pdf",
            "content-disposition": `inline; filename="${params.slug}.pdf"`,
            "cache-control": "public, max-age=31536000, immutable",
          },
        });
      },
    },
  },
});