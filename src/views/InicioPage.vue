<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ titulo }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{titulo}}</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
       <strong>Nombre</strong>
       <p>Franklyn Muñoz Salcedo</p>
       <br>
        <strong>Email</strong>
        <p>franklynmunozsalcedo@gmail.com</p>
        <br>
        <strong>Email Itla</strong>
        <p>20212296@itla.edu.do</p>
        <br>
        <img src="/hola.jpg" width="150" height="150">
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
const titulo ='Inicio';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
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
