<template>
  <AppLayout>
    <template #content>
        <section class="header">
            <div class="container">
              <h2 class="text-center">
                Custom Name Card | Make Your Own Card
              </h2>
            </div>
        </section>
        <section class="cards">
          <div class="container">
            <div class="row">
              <div class="col-3" v-for="card in cards" :key="card.id">
                 <div class="card">
                    <img @click="openModal(card)" :src="card.img" class="img-thumbnail">
                 </div>
              </div>
            </div>
          </div>
        </section>



    </template>

    <template #footer>    
    <v-dialog v-model="showDialog" max-width="500">
        <template v-slot:activator="{ on }">
          <v-btn v-on="on">Open Dialog</v-btn>
        </template>
        <v-card>
          <v-card-title>
            Dialog Title
          </v-card-title>
          <v-card-text>
            This is the dialog content.
          </v-card-text>
          <v-card-actions>
            <v-btn @click="showDialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
  </AppLayout>

</template>


<script>
import { computed, reactive, ref, getCurrentInstance, watchEffect } from "vue";
import AppLayout from "@/components/Layouts/AppLayout.vue"
export default {
    name:"Welcome",
    components:{
        AppLayout,
    },
    setup() {
      const cards = [
        {id:1 ,"img":"assets/images/cards/card1.jpg"},
        {id:2 ,"img":"assets/images/cards/card2.jpg"},
        {id:3 ,"img":"assets/images/cards/card3.webp"},
        {id:4 ,"img":"assets/images/cards/card4.jpg"},
        {id:5 ,"img":"assets/images/cards/card5.jpg"},
        {id:6 ,"img":"assets/images/cards/card6.jpg"},
        {id:7 ,"img":"assets/images/cards/card7.jpg"},
        {id:8 ,"img":"assets/images/cards/card8.webp"},
        {id:9 ,"img":"assets/images/cards/card9.jpg"},
        {id:10,"img":"assets/images/cards/card10.png"},
        {id:11,"img":"assets/images/cards/card11.webp"},
        {id:12,"img":"assets/images/cards/card12.webp"},
      ]

      const showDialog = ref(false);

      const openModal = (card)=> {
        console.log(card.img)
        showDialog.value = true;
      }
      const closeModal = ()=> {
        showDialog.value = false;
      }
        
      return {
          cards,
          showDialog,
          openModal,
          closeModal
      };
    },
}
</script>
