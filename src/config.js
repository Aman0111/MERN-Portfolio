// In local dev, Vite's proxy (see vite.config.js) forwards "/api" to the
// Express server, so an empty base works out of the box.
//
// If you deploy the client and server to different domains (e.g. client on
// Vercel, server on Render), set VITE_API_URL in a client/.env file to your
// server's public URL, e.g. VITE_API_URL=https://your-server.onrender.com
export const API_BASE = import.meta.env.VITE_API_URL || "";
