<script setup>
import EatDetailModal from '@/components/EatDetailModal.vue'
import EatMethodCard from '@/components/EatMethodCard.vue'
import FruitDetailModal from '@/components/FruitDetailModal.vue'
import HorizontalFruitSlider from '@/components/HorizontalFruitSlider.vue'
import QuizCard from '@/components/QuizCard.vue'
import { reactive, ref } from 'vue'

const tropicalFruits = [
  { id: 'mango', name: '芒果', image: 'mango.png' },
  { id: 'orange', name: '橙子', image: 'orange.png' },
  { id: 'pineapple', name: '凤梨', image: 'pineapple.png' },
  { id: 'mango', name: '芒果', image: 'mango.png' },
  { id: 'orange', name: '橙子', image: 'orange.png' },
  { id: 'pineapple', name: '凤梨', image: 'pineapple.png' },
  { id: 'mango', name: '芒果', image: 'mango.png' },
  { id: 'orange', name: '橙子', image: 'orange.png' },
  { id: 'pineapple', name: '凤梨', image: 'pineapple.png' },
]

const visible = reactive({
  modal: {
    fruitDetail: false,
    eatDetail: false,
  },
})
const selectedFruit = ref(null)

function openDetail() {
  selectedFruit.value = {
    name: '猕猴桃',
    imageUrl: '/images/fruits/kiwi.png',
    nutrients: {
      维生素C: '92.7mg',
      热量: '61kcal/100g',
      纤维: '3g',
    },
    storage: '常温阴凉处保存3-5天，冷藏可延长',
    waysToEat: ['切片食用', '搭配酸奶', '打成果汁'],
  }
  visible.modal.fruitDetail = true
}
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>首页</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-card @click="openDetail">
        <ion-card-header>
          <ion-card-title>猕猴桃</ion-card-title>
          <ion-card-subtitle>今日水果</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <ion-img class="w-[200px] mx-auto my-[-40px] mb-[20px]" src="/images/fruits/kiwi.png" alt="The Wisconsin State Capitol building in Madison, WI at night" />
          <span class="text-text-hightLight font-bold">富含维生素C，甜美多汁</span>
        </ion-card-content>
      </ion-card>

      <EatMethodCard
        title="猕猴桃优格碗"
        description="酸奶搭配猕猴桃和麦片，清爽解腻，适合早餐食用。"
        image-url="/images/eat-methods/kiwi_yogurt.png"
        :tags="['早餐', '低脂', '儿童推荐']"
        @click="visible.modal.eatDetail = true"
      />

      <HorizontalFruitSlider title="热带水果" :fruits="tropicalFruits" />
      <div class="mb-4" />
      <HorizontalFruitSlider title="热带水果" :fruits="tropicalFruits" />

      <ion-card>
        <ion-card-header>
          <ion-card-title>小知识</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <span>🍌 香蕉放在通风处可以延长保存时间喔</span>
        </ion-card-content>
      </ion-card>

      <QuizCard
        question="猕猴桃属于以下哪一类水果？"
        :options="['热带水果', '浆果类', '柑橘类', '核果类']"
        :answer-index="1"
      />

      <FruitDetailModal
        v-if="selectedFruit"
        :is-open="visible.modal.fruitDetail"
        :fruit="selectedFruit"
        :on-close="() => visible.modal.fruitDetail = false"
      />

      <EatDetailModal
        :is-open="visible.modal.eatDetail"
        :on-close="() => visible.modal.eatDetail = false"
        :data="{
          title: '猕猴桃优格碗',
          description: '酸奶搭配猕猴桃和麦片，清爽解腻，适合早餐食用。',
          imageUrl: '/images/eat-methods/kiwi_yogurt.png',
          tags: ['早餐', '低脂', '儿童推荐'],
        }"
      />
    </ion-content>
  </ion-page>
</template>
