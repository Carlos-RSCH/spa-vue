<template>
  <div>
    <h2>v-for</h2>
    <p>
      <strong>¿Qué es?</strong>  
      <code>v-for</code> es una directiva de Vue que permite iterar sobre listas o arreglos.  
      Se usa para mostrar múltiples elementos dinámicamente en el DOM.
    </p>

    <p>
      <strong>¿Cuándo se usa?</strong>  
      Cuando necesitas generar contenido repetido a partir de una colección de datos, como nombres, productos o mensajes.
    </p>

    <p>En este ejemplo, recorremos una lista de nombres y los mostramos en una lista numerada:</p>

    <ul>
      <li v-for="(nombre, index) in nombres" :key="index">
        {{ index + 1 }} - {{ nombre }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const nombres = ['Ana', 'Luis', 'María', 'Carlos']
</script>
