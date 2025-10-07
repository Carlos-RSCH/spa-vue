<template>
  <div>
    <h2>Ejemplo de v-if / v-else-if / v-else</h2>
    <p>Este ejemplo muestra cómo usar condiciones en Vue.</p>

    <button @click="estado = 'bueno'">Bueno</button>
    <button @click="estado = 'regular'">Regular</button>
    <button @click="estado = 'malo'">Malo</button>

    <p v-if="estado === 'bueno'">¡Excelente trabajo! 😄</p>
    <p v-else-if="estado === 'regular'">Vas bien, pero puedes mejorar.</p>
    <p v-else>Debes esforzarte más. 💪</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const estado = ref('bueno')
</script>
