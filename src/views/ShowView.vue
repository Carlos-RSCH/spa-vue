<template>
  <div>
    <h2>Ejemplo de v-show</h2>
    <p>v-show solo oculta visualmente el elemento, pero sigue en el DOM.</p>

    <button @click="visible = !visible">
      {{ visible ? 'Ocultar' : 'Mostrar' }} mensaje
    </button>

    <p v-show="visible">Este mensaje se oculta y muestra con v-show.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(true)
</script>
