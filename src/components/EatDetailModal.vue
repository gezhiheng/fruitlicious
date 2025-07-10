<script setup>
import { close } from 'ionicons/icons'
import { marked } from 'marked'
import { computed } from 'vue'

const props = defineProps({
  isOpen: Boolean,
  onClose: Function,
  title: String,
})

const markdown = `
![pic](/public/images/eat-methods/kiwi_yogurt.png)

## 🥣 所需材料

- 猕猴桃 1 个（去皮切片）
- 原味希腊酸奶 150g
- 燕麦片 30g
- 蜂蜜 1 小勺（可选）
- 坚果碎（如核桃、腰果）适量
- 奇亚籽 1 小勺（可选）
- 新鲜蓝莓或草莓（可选）

---

## 👩‍🍳 步骤说明

1. **准备食材**  
   将猕猴桃去皮切片，坚果稍微压碎备用。

2. **装碗铺底**  
   在碗中加入希腊酸奶，铺平作为底层。

3. **摆放配料**  
   依次在酸奶上摆放：
   - 猕猴桃片
   - 燕麦片
   - 坚果碎
   - 蓝莓/草莓（如有）
   - 撒上奇亚籽增添营养

4. **点缀调味**  
   根据口味可淋上少量蜂蜜提甜。
---

## ✅ 小贴士

- 可将燕麦提前用牛奶或酸奶冷藏一晚，做成“隔夜燕麦”，更柔软好吃。
- 也可加入香蕉、芒果等其他水果变换口味。
- 控制糖分摄入者可省略蜂蜜。
`

// 转换为 HTML，并替换图片样式
const htmlContent = computed(() =>
  marked(markdown).replaceAll('<img', '<img class="rounded-2xl"'),
)
</script>

<template>
  <IonModal :is-open="isOpen" @did-dismiss="onClose">
    <IonHeader translucent>
      <IonToolbar>
        <IonTitle>{{ props.title }}</IonTitle>
        <IonButtons slot="end">
          <IonButton @click="onClose">
            <IonIcon style="color: var(--dark-green2)" :icon="close" />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <div class="markdown-body" v-html="htmlContent" />
    </IonContent>
  </IonModal>
</template>

<style>
.markdown-body {
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--dark-green2);
}

.markdown-body h1 {
  font-size: xx-large;
  font-weight: bolder;
}

.markdown-body h2 {
  font-size: x-large;
  font-weight: bolder;
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3 {
  font-weight: bold;
  margin-top: 1.2em;
  margin-bottom: 0.6em;
}

.markdown-body ul {
  padding-left: 1.2em;
  list-style-type: disc;
}

.markdown-body ul li::marker {
  color: var(--dark-green2);
}

.markdown-body strong {
  color: var(--dark-green2);
}

.markdown-body hr {
  border: none;
  border-top: 1px dashed var(--dark-green2);
  margin: 1.5em 0;
}

.center-img {
  display: block;
  margin: 1.2em auto;
  max-width: 100%;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
</style>
