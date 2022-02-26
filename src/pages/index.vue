<script lang="ts" setup>
const today = new Date()

const { data } = await useFetch("/api/wordle", {
    params: {
        date: today.toDateString(),
    },
})

const answer = data.value.answer
</script>

<template>
    <Title />
    <ClientOnly>
        <div v-if="answer">
            <WordBox :word="answer" />
            <EnterKeyButton />
        </div>

        <div v-else>
            <div grid grid-col-1 place-items-center>
                <div flex>
                    <div text-4xl text-center>500: Something went wrong...</div>
                </div>
            </div>
        </div>

        <template #fallback>
            <div grid grid-col-1 place-items-center>
                <div text-4xl my-30>solving wordle...</div>
            </div>
        </template>
    </ClientOnly>
</template>
