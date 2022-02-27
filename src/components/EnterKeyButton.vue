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
                <div class="bg-[#d3d6da] dark:bg-[#3a3a3c]" text-3xl py-5 px-6 rounded-md>
                    <div>REVEAL</div>
                </div>
            </button>
        </div>
    </div>
</template>
