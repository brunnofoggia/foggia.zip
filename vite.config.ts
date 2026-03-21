import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

import { defineBaseUrl } from './src/utils/utils';

const componentTagger = () => null;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    base: defineBaseUrl(process.env.NODE_ENV),
    server: {
        host: '::',
        port: 8080,
        hmr: {
            overlay: false,
        },
    },
    plugins: [react(), mode === 'development' && componentTagger()].filter(Boolean),
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
}));
