<script setup>
import { chevronForwardOutline } from 'ionicons/icons'

defineProps({
  title: String,
  fruits: Array,
})
</script>

<template>
  <div class="px-4">
    <div class="flex justify-between items-center mb-2">
      <h2 class="text-lg my-1 font-bold">
        {{ title }}
      </h2>
      <div
        class="text-sm text-primary flex items-center cursor-pointer select-none"
        @click="onMoreClick"
      >
        <IonIcon :icon="chevronForwardOutline" size="small" />
      </div>
    </div>
    <div class="horizontal-scroll">
      <div class="flex gap-3">
        <div
          v-for="fruit in fruits"
          :key="fruit.id"
          class="snap-start w-28 shrink-0 rounded-xl bg-[#fcfcee] p-3 text-center"
        >
          <img
            :src="`/images/fruits/${fruit.image}`"
            :alt="fruit.name"
            class="w-full h-20 object-contain"
          >
          <p class="text-sm font-medium text-[var(--dark-green2)] my-0">
            {{ fruit.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  color: var(--dark-green2);
}

.horizontal-scroll {
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory; /* 启用水平吸附 */
  scrollbar-width: none; /* Firefox 隐藏滚动条 */
}

.snap-start {
  scroll-snap-align: start;
}
</style>
