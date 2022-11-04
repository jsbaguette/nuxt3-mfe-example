// https://v3.nuxtjs.org/api/configuration/nuxt.config
import federation from "@originjs/vite-plugin-federation";

export default defineNuxtConfig({
    // experimental: {
    //     asyncEntry: true
    // },
    routeRules: {
        '/_nuxt/**': { cors: true },
    },
    vite: {
        plugins: [
            federation({
                name: 'host-app',
                filename: 'remoteEntry.js',
                remotes: {
                    remote_app: "http://localhost:3000/_nuxt/remoteEntry.js",
                },
            })
        ]
    }
})