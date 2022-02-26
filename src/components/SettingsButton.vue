<script lang="ts" setup>
const shouldShowModal = ref(false)

const toggleModal = () => {
    shouldShowModal.value = !shouldShowModal.value
}
</script>

<template>
    <button @click="toggleModal">
        <div>
            <div class="i-ci-settings-filled"></div>
        </div>
    </button>
    <teleport to="body">
        <div v-if="shouldShowModal" @click="toggleModal" transition="colors opacity" duration-100 class="z-10">
            <SettingsModal />
        </div>
    </teleport>
</template>
