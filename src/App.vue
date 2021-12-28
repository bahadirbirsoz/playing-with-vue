<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <v-list>
        <v-list-item @click="$router.push('/')">
          <v-list-item-title>
            Anasayfa
          </v-list-item-title>
        </v-list-item>
        <v-list-item @click="$router.push('/products')">
          <v-list-item-title>
            Ürünler
          </v-list-item-title>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">

import {Component, Vue} from "vue-property-decorator";

@Component({

})
export default class App extends Vue {
  drawer: boolean = true;
  n: number = 40;

  mounted(){
    console.log( this.$router );
  }

  onListClick( e: PointerEvent ){
    console.log(e);
    e.preventDefault();
    console.log(this);
    console.log(this.$router);
  }
}
</script>
