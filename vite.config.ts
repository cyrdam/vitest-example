/// <reference types="vitest" />
import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	define: {
		'import.meta.vitest': 'undefined',
	},
	plugins: [preact()],
	test: {
		globals: true,
		environment: 'happy-dom',
		setupFiles: ['./src/test-setup.ts'],
		includeSource: ['src/**/*.{ts,tsx}'],
		mockReset: true,
		restoreMocks: true,
	},
});
