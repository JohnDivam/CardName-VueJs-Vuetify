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


