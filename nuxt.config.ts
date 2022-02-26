import { defineNuxtConfig } from "nuxt3"
import presetUno from "@unocss/preset-uno"
import presetAttributify from "@unocss/preset-attributify"

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
        theme: {
            colors: {
                wdlGreen: {
                    primary: "#6aaa64",
                    dark: "#538d4e",
                },
                wdlGray: {
                    primary: "#86888a",
                    dark: "#939598",
                },
                wdlBg: {
                    primary: "#ffffff",
                    dark: "#121213",
                },
                wdlBlack: "#212121",
            },
        },
        presets: [presetAttributify(), presetUno()],
    },
    srcDir: "src/",
})
