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
        <WordBox :word="answer" />
        <EnterKeyButton />

        <template #fallback>
            <div grid grid-col-1 place-items-center>
                <div text-4xl my-30>solving wordle...</div>
            </div>
        </template>
    </ClientOnly>
</template>
