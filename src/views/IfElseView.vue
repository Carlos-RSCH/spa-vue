<template>
  <div>
    <h2>v-if / v-else-if / v-else</h2>
    <p>
      <strong>¿Qué es?</strong>  
      <code>v-if</code> permite mostrar contenido solo si se cumple una condición.  
      <code>v-else-if</code> evalúa otra condición si la primera no se cumple.  
      <code>v-else</code> se muestra si ninguna condición anterior es verdadera.
    </p>

    <p>
      <strong>¿Cuándo se usa?</strong>  
      Cuando necesitas mostrar diferentes elementos según el estado de una variable o situación.  
      Es útil para decisiones múltiples en la interfaz.
    </p>

    <p>En este ejemplo, el contenido cambia según el valor de <code>estado</code>:</p>

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
