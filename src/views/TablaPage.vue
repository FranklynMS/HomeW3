<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Tabla</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tabla</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">

      <ionList>
        <ion-item>
          <ion-input 
          v-model="Numero"
          type="number"
          label="Numero" labelPlacement="floating" placeholder="Escriba Numero"></ion-input>
        </ion-item>

      </ionList>

      <ion-button @click="mostrarTabla" expand="block">Mostrar</ion-button>

      <ion-list v-if="tablaVisible">
        <ion-item v-for="(num, index) in Numeros" :key="index">
          {{ Numero }} x {{ num }} = {{ Numero * num }}
        </ion-item>
      </ion-list>

      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">

const Numero = ref<number>(6);

let Numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

let tablaVisible = ref<boolean>(false);

const mostrarTabla = () => {

  tablaVisible.value = !tablaVisible.value;
}


import { IonButtons, IonContent, IonInput,IonHeader, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { ref } from 'vue';
</script>

<style scoped>
#container {
 padding: 20px;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
