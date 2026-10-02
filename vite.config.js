import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// Runs api/contact.js locally so `npm run dev` behaves like Vercel.
// The key is read from .env (server side only) and is not exposed to the client bundle.
function devApi(env) {
  return {
    name: "dev-api-contact",
    configureServer(server) {
      server.middlewares.use("/api/contact", async (req, res) => {
        process.env.WEB3FORMS_ACCESS_KEY = env.WEB3FORMS_ACCESS_KEY || "";
        let raw = "";
        for await (const c of req) { raw += c; if (raw.length > 20000) break; }
        try { req.body = raw ? JSON.parse(raw) : {}; } catch { req.body = {}; }
        res.status = (code) => { res.statusCode = code; return res; };
        res.json = (o) => { res.setHeader("Content-Type", "application/json"); res.end(JSON.stringify(o)); };
        const { default: handler } = await import("./api/contact.js");
        await handler(req, res);
      });
    },
  };
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), devApi(loadEnv(mode, process.cwd(), ""))],
}));
