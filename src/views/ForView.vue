<template>
  <div>
    <h2>Ejemplo de v-for</h2>
    <p>Recorremos una lista de nombres con v-for.</p>

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
