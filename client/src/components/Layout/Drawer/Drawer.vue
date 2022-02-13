<template>
  <v-navigation-drawer :value="appDrawer" app right floating class="hd-LayoutDrawer grey darken-4" width="25vw">
    <DrawerTabs />
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
import DrawerTabs from "./DrawerTabs";

export default {
  name: "hd-LayoutDrawer",
  components: {
    DrawerTabs,
  },
  computed: {
    ...mapGetters({
      appDrawer: "app/getAppDrawer",
    }),
  },
};
</script>

<style scoped>
.hd-LayoutDrawer {
}
</style>
