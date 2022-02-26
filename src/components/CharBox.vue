<script lang="ts" setup>
type Props = {
    status: "absent" | "correct"
    char: string
}

const { status } = defineProps<Props>()
</script>

<template>
    <div
        :class="
            status == 'absent'
                ? 'bg-wdlGray-primary dark:bg-wdlGray-dark'
                : 'bg-wdlGreen-primary dark:bg-wdlGreen-dark flip delay-250'
        "
        font-semibold
        text-4xl
        px-3
        pt-3
        pb-6
        w-16
        h-16
        sm="text-5xl px-4 pt-4 pb-6 w-20 h-20"
        text-center
        items-center
    >
        <div
            :class="status == 'absent' ? 'text-wdl-gray opacity-0 ' : 'text-white opacity-100 delay-250'"
            transition-colors
            transition-opacity
        >
            {{ char.toUpperCase() }}
        </div>
        <!-- {{ char.toUpperCase() }} -->
    </div>
</template>

<style scoped>
.flip {
    animation-name: FlipAnim;
    animation-duration: 500ms;
    animation-timing-function: ease-in;
}

@keyframes FlipAnim {
    0% {
        transform: rotateX(0);
    }
    50% {
        transform: rotateX(-90deg);
    }
    100% {
        transform: rotateX(0);
    }
}
.tile.flip-in {
    animation-name: FlipIn;
    animation-duration: 250ms;
    animation-timing-function: ease-in;
}
@keyframes FlipIn {
    0% {
        transform: rotateX(0);
    }
    100% {
        transform: rotateX(-90deg);
    }
}

.tile.flip-out {
    animation-name: FlipOut;
    animation-duration: 250ms;
    animation-timing-function: ease-in;
}
@keyframes FlipOut {
    0% {
        transform: rotateX(-90deg);
    }
    100% {
        transform: rotateX(0);
    }
}
</style>
