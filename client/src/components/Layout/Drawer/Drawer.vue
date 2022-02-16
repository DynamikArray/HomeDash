<template>
  <v-navigation-drawer
    :value="appDrawer"
    app
    right
    floating
    class="hd-LayoutDrawer grey darken-3"
    :width="calculatedWidth"
  >
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
    calculatedWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "";
        case "sm":
          return "65vw";
        case "md":
          return "45vw";
        default:
          return "35vw";
      }
    },
  },
};
</script>

<style scoped>
.hd-LayoutDrawer {
}
</style>
