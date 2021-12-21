<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" @btnclick="hwButtonClicked"/>
    <HelloWorld msg="I am a prop"/>
    <HelloWorld msg="You can use me with @prop"/>
    <HelloWorld msg="When prop changes, component re-renders"/>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {

  hwButtonClicked(){
    alert("asd");
  }

}
</script>
