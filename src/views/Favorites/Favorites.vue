<script setup>
import ExploreContainer from '@/components/ExploreContainer.vue'
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>收藏</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">
            收藏
          </ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>
