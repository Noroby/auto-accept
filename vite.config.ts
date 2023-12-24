import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        minify: false,
        lib: {
            entry: 'src/index.ts',
            name: 'auto-accept',
            fileName: 'auto-accept',
        }
    }
});