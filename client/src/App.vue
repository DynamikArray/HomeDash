<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Layout/Header";
export default {
  name: "App",
  components: {
    Header,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
.shadow {
  text-shadow: #000 2px 2px 1px;
}
.shadow-small {
  text-shadow: #000 1px 1px 0px;
}
</style>
