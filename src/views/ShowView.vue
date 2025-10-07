<template>
  <div>
    <h2>v-show</h2>
    <p>
      <strong>¿Qué es?</strong>  
      <code>v-show</code> es una directiva de Vue que permite mostrar u ocultar un elemento visualmente.  
      A diferencia de <code>v-if</code>, el elemento permanece en el DOM aunque no sea visible.
    </p>

    <p>
      <strong>¿Cuándo se usa?</strong>  
      Cuando necesitas alternar visibilidad de forma rápida sin afectar la estructura del DOM.  
      Es útil para elementos que se mostrarán y ocultarán frecuentemente.
    </p>

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
