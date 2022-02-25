<script lang="ts" setup>
import { useEventBus } from "@vueuse/core"

const flipEvent = useEventBus<boolean>("flip")

const flip = () => {
    console.log("flip!!")
    flipEvent.emit(true)
}
</script>

<template>
    <div center>
        <div mx-auto>
            <button @click="flip">
                <div text-3xl text-black bg-gray-300 py-5 px-6 rounded-md>REVEAL</div>
            </button>
        </div>
    </div>
</template>
