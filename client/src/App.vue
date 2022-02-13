<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
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
