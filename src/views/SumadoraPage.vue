<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Sumadora</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Sumadora</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <p>Sumadora</p>

 <ionList>
       <ion-item>
            <ion-input
            v-model="Numero1"
            type="number" label="Numero1" labelPlacement="floating" placeholder="Escriba Numero"></ion-input>
          </ion-item>
          <IonItem>
            <ion-input
            v-model="Numero2"
            type="number" label="Numero2" labelPlacement="floating" placeholder="Escriba Numero"></ion-input>
          </IonItem>
       

      </ionList>

 <ion-button @click="mostrarTabla" expand="block">Mostrar/Ocultar Suma</ion-button> <ion-list v-if="tablaVisible">
          <ion-item>
            {{ Numero1 ?? 0 }} + {{ Numero2 ?? 0 }} = {{ (parseInt(String(Numero1 ?? 0)) + parseInt(String(Numero2 ?? 0))) }}
          </ion-item>
        </ion-list>
      








      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">

let tablaVisible = ref<boolean>(false);

const Numero1 = ref<number | null>(null);

const Numero2 = ref<number | null>(null);




const mostrarTabla = () => {

  tablaVisible.value = !tablaVisible.value;
}




import { IonButtons, IonContent, IonHeader, IonItem, IonMenuButton, IonPage, IonTitle, IonToolbar, IonList, IonInput, IonButton } from '@ionic/vue'; 
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
