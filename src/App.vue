<template>
  <NavBar/>
  <router-view />
</template>

<script setup>

import NavBar from './components/Navbar.vue';

defineOptions({
  name: 'App'
});
</script>
