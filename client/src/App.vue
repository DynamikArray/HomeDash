<template>
  <v-app>
    <Header />
    <Drawer />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import { FETCH_DEVICES_HUBITAT, FETCH_DEVICES_HD } from "@/store/store.constants.js";

import Header from "@/components/Layout/Header";
import Drawer from "@/components/Layout/Drawer/Drawer";
import Footer from "@/components/Layout/Footer";
export default {
  name: "App",
  components: {
    Header,
    Drawer,
    Footer,
  },
  async mounted() {
    await this.$store.dispatch(`devices/${FETCH_DEVICES_HUBITAT}`);
    await this.$store.dispatch(`devices/${FETCH_DEVICES_HD}`);
  },
};
</script>

<style>
.shadow {
  text-shadow: #000 2px 2px 1px;
}
.shadow-small {
  text-shadow: #000 1px 1px 0px;
}
.v-tooltip__content.menuable__content__active {
  opacity: 0.95 !important;
}
</style>
