// https://v3.nuxtjs.org/api/configuration/nuxt.config
// import federation from "@originjs/vite-plugin-federation";
import webpack from "webpack"

// import { } from "@nuxt/webpack-builder"

export default defineNuxtConfig({
    experimental: {
        asyncEntry: true
    },
    builder: "webpack",
    routeRules: {
        '/_nuxt/**': { cors: true },
    },
    webpack: {
        plugins: [
            new webpack.container.ModuleFederationPlugin({
                name: 'host',
                filename: 'remoteEntry.js',
                remotes: {
                    remoteapp: "remoteapp@http://localhost:3000/_nuxt/remoteEntry.js",
                },
                shared: {
                    "vue": {
                        singleton: true,
                        eager: false

                    }
                }
            })
        ]
    },
    ssr: false, // why if not set to false its not working anymore ?
    // vite: {
    //     plugins: [
    //         federation({
    //             name: 'host-app',
    //             filename: 'remoteEntry.js',
    //             remotes: {
    //                 remote_app: "http://localhost:3000/_nuxt/remoteEntry.js",
    //             },
    //         })
    //     ]
    // }
})
