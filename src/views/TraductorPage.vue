<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Traductor</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Traductor</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <p>Ingresa un numero del 1 al 1000.</p>

        <ion-item>
          <ion-input
            v-model="inputNumber"
            type="number" label="Número" label-placement="floating" min="1"max="1000"></ion-input>
        </ion-item>

        <ion-button expand="block" @click="translateNumberToWords">
          Traducir
        </ion-button>

        <ion-list v-if="translatedText">
          <ion-item>
            <ion-label>
              <h2>Numero en Letras:</h2>
              <p>{{ translatedText }}</p>
            </ion-label>
          </ion-item>
        </ion-list>

        <ion-text color="danger" v-if="showError">
          <p>{{ errorMessage }}</p>
        </ion-text>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonButtons,IonContent, IonInput, IonButton, IonItem, IonList, IonLabel, IonText, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,} from '@ionic/vue';
import { ref } from 'vue';

const inputNumber = ref<number | null>(null);
const translatedText = ref<string>('');
const showError = ref<boolean>(false);
const errorMessage = ref<string>('');

const units = [
  '',
  'uno','dos','tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve',
];
const teens = [
  'diez','once','doce','trece','catorce','quince','dieciséis','diecisiete','dieciocho','diecinueve',
];
const tens = [
  '',
  'diez','veinte','treinta','cuarenta','cincuenta','sesenta','setenta','ochenta','noventa',
];
const hundredsPrefix = [
  '',
  'ciento','doscientos','trescientos','cuatrocientos','quinientos','seiscientos','setecientos','ochocientos','novecientos',
];

const translateNumberToWords = () => {
  const num = Number(inputNumber.value);
  translatedText.value = '';
  showError.value = false;
  errorMessage.value = '';

  if (isNaN(num) || num < 1 || num > 1000) {
    showError.value = true;
    errorMessage.value = 'Por favor, ingrese un número entero entre 1 y 1000.';
    return;
  }

  if (num === 1000) {
    translatedText.value = 'mil';
    return;
  }

  if (num === 100) {
    translatedText.value = 'cien';
    return;
  }

  let result = '';
  let tempNum = num;

 
  if (tempNum >= 100) {
    const h = Math.floor(tempNum / 100);
    result += hundredsPrefix[h];
    tempNum %= 100;
    if (tempNum > 0) {
      result += ' ';
    }
  }

 
  if (tempNum > 0) {
    if (tempNum < 10) {
      result += units[tempNum];
    } else if (tempNum < 20) {
      result += teens[tempNum - 10];
    } else {
      const t = Math.floor(tempNum / 10);
      const u = tempNum % 10;

      if (t === 2 && u === 0) {
        result += 'veinte';
      } else if (t === 2) {
        const veintiMap: { [key: number]: string } = {
          1: 'veintiuno',
          2: 'veintidós',
          3: 'veintitrés',
          4: 'veinticuatro',
          5: 'veinticinco',
          6: 'veintiséis',
          7: 'veintisiete',
          8: 'veintiocho',
          9: 'veintinueve',
        };
        result += veintiMap[u] || '';
      } else {
        result += tens[t];
        if (u > 0) {
          result += ' y ' + units[u];
        }
      }
    }
  }

  translatedText.value = result.trim();
};
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
