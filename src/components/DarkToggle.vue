<script setup lang="ts">
const color = useColorMode()
function toggleTheme() {
    color.value = color.value === "dark" ? "light" : "dark"
}
</script>

<template>
    <!-- {{ color }} -->

    <button class="!outline-none" @click="toggleTheme()">
        <div class="dark:i-carbon-moon i-carbon:sun" />
    </button>
</template>
