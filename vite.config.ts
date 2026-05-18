import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "/src/styles/variables" as *;`,
			},
		},
	},
	plugins: [react()],
	server: {
		host: true,
		port: 5173,
		strictPort: true,
	},
});
