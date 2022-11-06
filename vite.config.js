import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svgr(),
		react(),
		VitePWA({
			manifest: {
				name: 'Votre Pharmacie près de chez vous !',
				short_name: 'PharmaTrack',
				start_url: '/',
				display: 'standalone',
				background_color: 'transparent',
				lang: 'fr',
				scope: '/',
				icons: [
					{
						src: '/logo.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'any maskable',
					},
					{
						src: '/logo.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable',
					},
				],
				theme_color: 'transparent',
			},
		}),
	],
});
