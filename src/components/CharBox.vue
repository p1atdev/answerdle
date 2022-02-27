<script lang="ts" setup>
type Props = {
    status: "absent" | "correct"
    char: string
}

const { status } = defineProps<Props>()
</script>

<template>
    <div>
        <div>
            <Transition name="tile">
                <div
                    v-if="status == 'absent'"
                    class="bg-wdlGray-primary dark:bg-wdlGray-dark"
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
                    <div class=""></div>
                </div>
                <div
                    v-else-if="status == 'correct'"
                    class="bg-wdlGreen-primary dark:bg-wdlGreen-dark"
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
                    <div class="text-white opacity-100">
                        {{ char.toUpperCase() }}
                    </div>
                    <!-- {{ char.toUpperCase() }} -->
                </div>
            </Transition>
        </div>
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
/* .tile.flip-in {
    animation-name: FlipIn;
    animation-duration: 250ms;
    animation-timing-function: ease-in;
} */
@keyframes FlipIn {
    0% {
        transform: rotateX(0);
    }
    100% {
        transform: rotateX(-90deg);
    }
}

/* .tile.flip-out {
    animation-name: FlipOut;
    animation-duration: 250ms;
    animation-timing-function: ease-in;
} */
@keyframes FlipOut {
    0% {
        transform: rotateX(-90deg);
    }
    100% {
        transform: rotateX(0);
    }
}

.tile-enter-active {
    animation-name: FlipIn;
    animation-duration: 250ms;
    animation-timing-function: ease-in;
}

.tile-correct-enter-from {
    position: absolute;
    visibility: invisible;
}
.tile-correct-enter-to {
    visibility: visible;
}

.tile-leave-active {
    animation-name: FlipOut;
    animation-duration: 250ms;
    animation-timing-function: ease-in;
}
</style>
