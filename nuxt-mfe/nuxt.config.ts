// import federation from "@originjs/vite-plugin-federation";
import webpack from "webpack"

export default defineNuxtConfig({
    experimental: {
        asyncEntry: true
    },
    routeRules: {
        '/_nuxt/**': { cors: true },
    },
    builder: "webpack",
    webpack: {
        plugins: [
            new webpack.container.ModuleFederationPlugin({
                name: 'remoteapp',
                filename: 'remoteEntry.js',
                exposes: {
                    './Button': './components/Button.vue',
                },
                shared: {
                    "vue": {
                        singleton: true,
                        eager: false
                    }
                }
            })
        ],
    },
    ssr: false,
    // vite: {
    //     plugins: [
    //         federation({
    //             name: 'remote-app',
    //             filename: 'remoteEntry.js',
    //             exposes: {
    //                 './Button': './components/Button.vue',
    //             },
    //         })
    //     ]
    // }
})
