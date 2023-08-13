import { defineConfig } from 'vite'
import { resolve } from 'pathe'
import dts from "vite-plugin-dts"

export default defineConfig({
    plugins: [dts({
        insertTypesEntry: true,
    })],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'utils',
            // the proper extensions will be added
            fileName: 'index',
            formats: ["cjs", "es", "iife", "umd"]
        }
    }
})