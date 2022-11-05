import federation from "@originjs/vite-plugin-federation";
import webpack from "webpack"

export default defineNuxtConfig({
    // experimental: {
    //     asyncEntry: true
    // },
    routeRules: {
        '/_nuxt/**': { cors: true },
    },
    webpack: {
        plugins: [
            new webpack.container.ModuleFederationPlugin({
                name: 'remoteApp',
                filename: 'remoteEntry.js',
                exposes: {
                    './Button': './components/Button.vue',
                }
            })
        ]
    }
    // ssr: false,
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
