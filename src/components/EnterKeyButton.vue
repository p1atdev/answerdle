<script lang="ts" setup>
import { useEventBus } from "@vueuse/core"

const flipEvent = useEventBus<boolean>("flip")

const flip = () => {
    flipEvent.emit(true)
}
</script>

<template>
    <div grid grid-col-1 items-center>
        <div mx-auto>
            <button @click="flip">
                <div bg-keyboard-light dark:bg-keyboard-dark text-3xl py-5 px-6 rounded-md>REVEAL</div>
            </button>
        </div>
    </div>
</template>
