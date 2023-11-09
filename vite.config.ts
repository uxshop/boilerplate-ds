import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		dedupe: ['vue'],
		alias: {
			'@ds': fileURLToPath(new URL('./node_modules/design-system/src/index.ts', import.meta.url)),
			'@': path.resolve(__dirname, '/src')
		}
	}
})
