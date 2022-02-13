<template>
  <vuescroll :ops="scrollOptions" class="mr-1">
    <div class="hd-DrawerTabs fill-height">
      <v-tabs v-model="drawerTab" grow center-active color="primary" active-class="">
        <v-tab><v-icon class="mr-1">fas fa-laptop-house</v-icon>Devices </v-tab>
        <v-tab><v-icon class="mr-1">fas fa-stream</v-icon>Events </v-tab>
        <BtnDrawer closeButton />
      </v-tabs>

      <v-tabs-items class="hd-DrawerTabsItems fill-height" v-model="drawerTab">
        <v-tab-item key="devicesTab" class="fill-height">
          <DevicesDrawerTab />
        </v-tab-item>
        <v-tab-item key="eventsTab">
          <EventsDrawerTab />
        </v-tab-item>
      </v-tabs-items>
    </div>
  </vuescroll>
</template>

<script>
import { APP_DRAWER_TAB } from "@/store/store.constants.js";

import BtnDrawer from "@/components/HomeDash/Buttons/BtnDrawer";
import DevicesDrawerTab from "@/components/Devices/DevicesDrawerTab";
import EventsDrawerTab from "@/components/Events/EventsDrawerTab";

import { scrollbarSettings } from "@/util/scrollbarSettings";
import vuescroll from "vuescroll";

export default {
  name: "hd-DrawerTabs",
  components: {
    BtnDrawer,
    DevicesDrawerTab,
    EventsDrawerTab,
    vuescroll,
  },
  data: () => ({
    scrollOptions: scrollbarSettings,
  }),
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

<style scoped></style>
