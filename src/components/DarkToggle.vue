<script setup lang="ts">
import { useColorMode } from "@vueuse/core"

const color = useColorMode()
function toggleDark() {
    color.value = color.value === "dark" ? "light" : "dark"
}
</script>

<template>
    <!-- {{ color }} -->
    <button class="!outline-none" @click="toggleDark()">
        <div class="dark:i-carbon-moon i-carbon:sun" />
    </button>
</template>
