<script setup>
defineProps({
  title: String,
  description: String,
  imageUrl: String,
  tags: {
    type: Array,
    default: () => [],
  },
  onClick: {
    type: Function,
    default: () => {},
  },
})
</script>

<template>
  <ion-card @click="onClick">
    <ion-img
      :src="imageUrl"
      alt="吃法图示"
      class="rounded-t-xl h-40 object-cover"
    />

    <ion-card-header>
      <ion-card-title class="text-[var(--dark-green2)] text-base">
        {{ title }}
      </ion-card-title>
    </ion-card-header>

    <ion-card-content class="text-sm text-[var(--dark-green2)]">
      <p class="line-clamp-2 mb-2">
        {{ description }}
      </p>

      <div class="flex flex-wrap gap-2">
        <ion-chip
          v-for="tag in tags"
          :key="tag"
          color="success"
          class="text-xs bg-[#def9e7] text-[#3ba86a] rounded-full px-2 py-1"
        >
          #{{ tag }}
        </ion-chip>
      </div>
    </ion-card-content>
  </ion-card>
</template>
