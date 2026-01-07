<script setup>
import HomeFooter from './components/HomeFooter.vue';
import HomeHeader from './components/HomeHeader.vue';

</script>

<template>
   <div class="app">
     <!-- <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p> -->
  <HomeHeader></HomeHeader>
    <main>
      <RouterView />
    </main>
    <HomeFooter></HomeFooter>
  </div>
 
</template>

<style scoped></style>
