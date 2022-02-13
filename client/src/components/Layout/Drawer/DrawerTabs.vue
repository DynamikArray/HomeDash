<template>
  <div class="hd-DrawerTabs fill-height">
    <v-tabs v-model="drawerTab" grow center-active color="primary" active-class="">
      <v-tab> Devices </v-tab>
      <v-tab> Events </v-tab>
      <BtnDrawer closeButton />
    </v-tabs>
    <v-tabs-items class="hd-DrawerTabsItems fill-height" v-model="drawerTab">
      <v-tab-item key="devicesTab"> Devices Tab </v-tab-item>

      <v-tab-item key="eventsTab"> Events Tab </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { APP_DRAWER_TAB } from "@/store/store.constants.js";

import BtnDrawer from "@/components/HomeDash/Buttons/BtnDrawer";

export default {
  name: "hd-DrawerTabs",
  components: {
    BtnDrawer,
  },
  computed: {
    drawerTab: {
      get() {
        return this.$store.state.app.drawerTab;
      },
      set(value) {
        this.$store.commit(`app/${APP_DRAWER_TAB}`, value);
      },
    },
  },
};
</script>

<style scoped>
.hd-DrawerTabs {
  overflow: hidden;
}
</style>
