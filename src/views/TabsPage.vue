<script setup lang="ts">
import { IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/vue'
import { ellipse, square, triangle } from 'ionicons/icons'
</script>

<template>
  <IonPage>
    <IonTabs>
      <IonRouterOutlet />
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/home">
          <IonIcon aria-hidden="true" :icon="triangle" />
          <IonLabel>首页</IonLabel>
        </IonTabButton>

        <IonTabButton tab="tab2" href="/library">
          <IonIcon aria-hidden="true" :icon="ellipse" />
          <IonLabel>百科</IonLabel>
        </IonTabButton>

        <IonTabButton tab="tab3" href="/favorites">
          <IonIcon aria-hidden="true" :icon="ellipse" />
          <IonLabel>收藏</IonLabel>
        </IonTabButton>

        <IonTabButton tab="tab4" href="/profile">
          <IonIcon aria-hidden="true" :icon="square" />
          <IonLabel>我的</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonPage>
</template>
