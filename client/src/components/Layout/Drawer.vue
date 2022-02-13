<template>
  <v-navigation-drawer :value="appDrawer" app right floating class="hd-LayoutDrawer" width="25vw">
    <div class="pa-2">
      <p>Our Drawer And Tabs Can Go In Here For Devices and Events</p>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "hd-LayoutDrawer",
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
