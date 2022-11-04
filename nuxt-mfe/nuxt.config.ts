import federation from "@originjs/vite-plugin-federation";

export default defineNuxtConfig({
    experimental: {
        asyncEntry: true
    },
    // why this is working in the context of non host
    // ssr: false,
    routeRules: {
        '/_nuxt/**': { cors: true },
    },
    vite: {
        plugins: [
            federation({
                name: 'remote-app',
                filename: 'remoteEntry.js',
                exposes: {
                    './Button': './components/Button.vue',
                },
            })
        ]
    }
})
