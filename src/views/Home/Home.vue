<script setup>
const fruits = [
  {
    name: '草莓',
    description: '富含维生素C，甜美多汁',
    image: 'https://example.com/strawberry.png',
  },
  {
    name: '芒果',
    description: '热带水果，味道香浓',
    image: 'https://example.com/mango.png',
  },
]
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>首页</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header>
          <ion-card-title>猕猴桃</ion-card-title>
          <ion-card-subtitle>今日水果</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <ion-img class="w-[200px] mx-auto my-[-40px] mb-[20px]" src="/imgs/kiwi.png" alt="The Wisconsin State Capitol building in Madison, WI at night" />
          <span class="text-text-hightLight">富含维生素C，甜美多汁</span>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-title>小知识</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <span>🍌 香蕉放在通风处可以延长保存时间喔</span>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>
