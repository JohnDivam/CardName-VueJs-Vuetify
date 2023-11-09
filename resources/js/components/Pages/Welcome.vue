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
    <v-dialog v-model="showDialog" width="800">
        <v-card>
          <v-card-title>
            Card Name 
          </v-card-title>
          <v-card-text style="bg-color:red">
            <v-img :src="dialogImg" width="100%" height="400"></v-img>
            <v-text-field  label="Your Name" v-model="dialogName" required></v-text-field>
          </v-card-text>
            <v-card-actions class="justify-right">
            <v-btn @click="showDialog = false">Close</v-btn>
            <v-btn @click="showDialog = false" color="success">Confirm</v-btn>
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
      const dialogImg = ref("");
      const dialogName = ref("");

      const openModal = (card)=> {
        dialogImg.value = card.img;
        showDialog.value = true;
      }
      const closeModal = ()=> {
        showDialog.value = false;
      }

        
      return {
          cards,
          showDialog,
          openModal,
          closeModal,
          dialogImg,
          dialogName
      };
    },
}
</script>
