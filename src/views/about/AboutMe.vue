<template>
  <div>
    <h3>
      About Me
    </h3>
    <input v-model="counter">

    <h1>{{ counter }}</h1>
    <button @click="increase">
      Increase
    </button>

    <h4>{{ user.firstName }} {{ user.lastName }}</h4>
    <h1>{{ fullName }}</h1>
    <button @click="onResetClick">
      RESET
    </button>

  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import AboutCompany from "@/views/about/AboutCompany.vue";

@Component({
  components: {AboutCompany}
})
export default class AboutMe extends Vue {

  user = {
    firstName: "Bahadır",
    lastName: "Birsöz",
  }

  counter = 2;

  mounted() {
    this.counter = 0;
    window.setTimeout(() => {

      this.counter = 4;
    }, 2000);
  }

  increase() {
    this.counter++;
  }

  onResetClick() {
    this.counter = 0;
  }

  get fullName(): string {
    return this.user.firstName.substr(0,1) + ". " + this.user.lastName;
  }

}
</script>

<style scoped>

</style>