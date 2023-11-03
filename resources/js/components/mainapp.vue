<template>
  <v-app>
    <v-main>
      <router-view></router-view> 
    </v-main>
  </v-app>
</template>

<script>
import { ref, computed, onMounted, getCurrentInstance } from "vue";

export default {
    name: 'mainapp',
    setup() {
        
    },
    
}
</script>
