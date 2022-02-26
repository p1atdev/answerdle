<script lang="ts" setup>
import { onKeyUp, useTimeout, promiseTimeout } from "@vueuse/core"
import { useEventBus } from "@vueuse/core"

type Props = {
    word: string
}

const { word } = defineProps<Props>()

let statuses = ref<("absent" | "correct")[]>(
    Array(...word).map(() => {
        return "absent"
    })
)

const flip = async () => {
    for await (const index of statuses.value.keys()) {
        statuses.value[index] = "correct"
        await promiseTimeout(300)
    }
}

const flipEvent = useEventBus<boolean>("flip")

const listener = async () => {
    await flip()

    unsubscribeFlip()
}

// ボタンの判定をリッスン
const unsubscribeFlip = flipEvent.on(listener)

onKeyUp("Enter", async () => {
    await flip()
})
</script>

<template>
    <div
        grid
        grid-col-1
        place-items-center
        my-30
        @enter-key="
            () => {
                console.log('emitttt')
            }
        "
    >
        <div flex gap-x-2 sm:gap-x-4>
            <div v-for="(_, index) in word">
                <CharBox :status="statuses[index]" :char="word[index]" :key="index" />
                <!-- {{ statuses[index] }} -->
            </div>
        </div>
    </div>
</template>
