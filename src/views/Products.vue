<template>
  <v-container>
    <h1>{{pageTitle}}</h1>
    <v-row>
      <v-col md="4" sm="6" v-for="item in productsList">
        <v-card rounded >
          <v-card-title>
            {{item.title}}
          </v-card-title>
          <v-card-text>
            <p class="body-2">Marka : {{item.brand}}</p>
            <p class="body-1 text-right">Fiyat : {{item.price}} {{item.currency}}</p>
          </v-card-text>
          <v-card-actions class="orange">
            <v-spacer>
            </v-spacer>
            <v-btn @click="addToCart">
              Sepete Ekle
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";


@Component({})
export default class Products extends Vue {
  pageTitle = "ÜRÜNLER";
  productsList: any = [];
  pageNr = 1;

  mounted(){
    window.setTimeout( ()=>{
      this.productsList =  [
        {
          title: "Fotoğraf Makinası",
          brand: "Kodak",
          price: 115.23,
          currency: "EUR"
        },
        {
          title: "Macbook Pro",
          brand: "Apple",
          price: 2115.23,
          currency: "EUR"
        },
        {
          title: "Çay Bardağı",
          brand: "Paşabahçe",
          price: 1.35,
          currency: "USD"
        }
      ];
    },2000 );

  }

  addToCart(e: any) {
    console.log(e);
  }
}
</script>

<style scoped>

</style>