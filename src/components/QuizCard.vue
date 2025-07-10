<script setup>
import { ref } from 'vue'

defineProps({
  question: String,
  options: {
    type: Array,
    default: () => [],
  },
  answerIndex: Number, // 正确选项的下标
})

const selected = ref(null)
const showResult = ref(false)

function select(index) {
  if (selected.value !== null)
    return
  selected.value = index
  showResult.value = true
}
</script>

<template>
  <ion-card class="p-4 rounded-xl mt-6">
    <ion-card-header>
      <ion-card-title class="text-base text-[var(--dark-green2)]">
        {{ question }}
      </ion-card-title>
    </ion-card-header>

    <ion-card-content>
      <div class="flex flex-col gap-2 mb-2">
        <ion-button
          v-for="(option, index) in options"
          :key="index"
          class="text-[var(--dark-green2)]"
          :color="selected === index ? (index === answerIndex ? 'success' : 'danger') : 'medium'"
          fill="outline"
          size="small"
          expand="block"
          @click="select(index)"
        >
          {{ option }}
        </ion-button>
      </div>

      <p v-if="showResult" class="text-sm text-[var(--dark-green2)]">
        <span v-if="selected === answerIndex"> ✅ 回答正确！ </span>
        <span v-else> ❌ 正确答案是：{{ options[answerIndex] }} </span>
      </p>
    </ion-card-content>
  </ion-card>
</template>
