import { defineConfig } from 'vite';
import fs from 'node:fs/promises'
import path from 'node:path'
import pkg from './package.json';

const BANNER = `/**
 * @name ${pkg.name}
 * @version ${pkg.version}
 * @description ${pkg.description}
 * @author ${pkg.author}
 */`;

fs.writeFile(
    path.join(__dirname, 'balance-buff-viewer.js'),
    `${BANNER}\n\nexport * from 'https://cdn.skypack.dev/${pkg.name}?min';`
);

export default defineConfig({
    build: {
        emptyOutDir: false,
        minify: false,
        lib: {
            entry: 'src/main.ts',
            name: 'auto-accept',
            fileName: 'auto-accept',
            formats: ["es"]
        }
    },
    esbuild: {
        banner: BANNER,
        legalComments: 'none'
    },
});