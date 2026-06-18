import { createFileRoute, notFound } from "@tanstack/react-router";
import { getExperience } from "@/lib/experiences";

export const Route = createFileRoute("/api/public/pdf/$slug")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const exp = getExperience(params.slug);
        if (!exp?.pdf) throw notFound();

        const projectId = "7af69fa8-433e-470d-990e-c12e96027377";
        const upstreamUrl = `https://project--${projectId}.lovable.app${exp.pdf.url}`;
        const upstream = await fetch(upstreamUrl);
        if (!upstream.ok || !upstream.body) {
          return new Response(`PDF fetch failed: ${upstream.status}`, { status: 502 });
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