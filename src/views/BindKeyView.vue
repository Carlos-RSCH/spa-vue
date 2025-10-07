<template>
  <div>
    <h2>Ejemplo de v-bind:key</h2>
    <p>Usar una clave única ayuda a Vue a identificar los elementos en bucles.</p>

    <ul>
      <li v-for="persona in personas" :key="persona.id">
        {{ persona.id }} - {{ persona.nombre }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const personas = [
  { id: 1, nombre: 'Juan' },
  { id: 2, nombre: 'Pedro' },
  { id: 3, nombre: 'Laura' },
]
</script>
