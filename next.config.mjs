/** @type {import('next').NextConfig} */
const nextConfig = {
  // Permet de builder ou de lancer un second serveur sans écraser le .next
  // utilisé par `npm run dev` (sinon le serveur de dev tombe en 404).
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
