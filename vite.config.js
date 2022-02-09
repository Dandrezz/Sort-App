import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  base:'https://dandrezz.github.io/',
  plugins: [reactRefresh()]
})
