import { defineNuxtConfig } from "nuxt3"

// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0"

export default defineNuxtConfig({
    meta: {
        title: "ANSWERDLE",
    },
    buildModules: ["@vueuse/nuxt", "@unocss/nuxt", "@pinia/nuxt"],
    vueuse: {
        ssrHandlers: true,
    },
    unocss: {
        uno: true,
        attributify: true,
        preflight: true,
        icons: {
            scale: 1.2,
        },
        shortcuts: [],
    },
})
