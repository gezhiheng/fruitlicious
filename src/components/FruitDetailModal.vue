<script setup>
import { close } from 'ionicons/icons'

defineProps({
  isOpen: Boolean,
  fruit: Object,
  onClose: Function,
})
</script>

<template>
  <ion-modal :is-open="isOpen" @did-dismiss="onClose">
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>{{ fruit.name }}</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="onClose">
            <IonIcon style="color: var(--dark-green2)" :icon="close" size="small" />
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-img
        :src="fruit.imageUrl"
        alt="水果图片"
        class="rounded-lg mb-4"
      />

      <ion-card>
        <ion-card-header>
          <ion-card-title>营养信息</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ul class="text-sm text-gray-700">
            <li v-for="(value, key) in fruit.nutrients" :key="key">
              {{ key }}：{{ value }}
            </li>
          </ul>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-title>保存建议</ion-card-title>
        </ion-card-header>
        <ion-card-content class="text-sm text-gray-600">
          {{ fruit.storage }}
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-title>吃法推荐</ion-card-title>
        </ion-card-header>
        <ion-card-content class="text-sm text-gray-700">
          <ul>
            <li v-for="(way, i) in fruit.waysToEat" :key="i">
              🍽 {{ way }}
            </li>
          </ul>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-modal>
</template>
