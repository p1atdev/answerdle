import { defineNuxtConfig } from "nuxt3"
import presetUno from "@unocss/preset-uno"
import presetAttributify from "@unocss/preset-attributify"
import presetIcons from "@unocss/preset-icons"

// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0"

export default defineNuxtConfig({
    meta: [
        { name: "title", content: "ANSWERDLE" },
        { name: "description", content: "See the answer of Wordle!" },
        // ogp
        { property: "og:type", content: "website" },
        { property: "og:title", content: "ANSWERDLE" },
        { property: "og:description", content: "See the answer of Wordle!" },
        // { property: "og:image", content: "https://answerdle.net/ogp.png" },
        { property: "og:url", content: "https://answerdle.net/" },
        // twitter
        { name: "twitter:card", content: "summary" },
        { name: "twitter:site", content: "@p1atdev" },
        { name: "twitter:title", content: "ANSWERDLE" },
        { name: "twitter:description", content: "See the answer of Wordle!" },
        { name: "twitter:image", content: "https://answerdle.net/favicon.ico" },
        { name: "twitter:image:alt", content: "ANSWERDLE" },
        { name: "twitter:url", content: "https://answerdle.net/" },
    ],
    buildModules: ["@vueuse/nuxt", "@unocss/nuxt", "@pinia/nuxt"],
    vueuse: {
        // カラーモードがなぜか反映されない不具合解消
        // ssrHandlers: true,
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
                keyboard: {
                    light: "#d3d6da",
                    dark: "#3a3a3c",
                },
            },
        },
        presets: [presetAttributify(), presetUno(), presetIcons()],
    },
    srcDir: "src/",

    // ↓ #3393の暫定的な対処
    // components: {
    //     global: true,
    //     dirs: ["~/components"],
    // },
})
