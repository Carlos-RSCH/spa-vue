<template>
  <div>
    <h2>v-bind:key</h2>
    <p>
      <strong>¿Qué es?</strong>  
      <code>v-bind:key</code> se usa junto con <code>v-for</code> para asignar una clave única a cada elemento renderizado.  
      Esto permite a Vue identificar y actualizar eficientemente los elementos cuando cambian.
    </p>

    <p>
      <strong>¿Cuándo se usa?</strong>  
      Siempre que se renderizan listas con <code>v-for</code>, especialmente si los datos pueden cambiar dinámicamente.  
      Usar una clave única evita errores y mejora el rendimiento.
    </p>

    <p>En este ejemplo, cada persona tiene un <code>id</code> único que se usa como clave:</p>

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
  { id: 3, nombre: 'Laura' }
]
</script>
