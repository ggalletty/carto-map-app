import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import basicSsl from "@vitejs/plugin-basic-ssl";

// https://vitejs.dev/config/
export default defineConfig(() => {
  const base = process.env["BASE_URL"] ?? "/";
  return { base, plugins: [react(), basicSsl()] };
});
