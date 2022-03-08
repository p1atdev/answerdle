<script lang="ts" setup>
// import { useMouse } from "@vueuse/core"

// const { x, y, sourceType } = useMouse()
</script>

<template>
    <div>
        <NavBar />

        <main class="mb-24">
            <NuxtPage />
        </main>

        <Footer />
    </div>
</template>

<style>
@import "~/styles/main.css";
</style>
