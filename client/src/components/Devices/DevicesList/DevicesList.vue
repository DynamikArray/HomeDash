<template>
  <div>
    <v-list color="" two-line class="text-left ma-0 pa-0" v-if="hubitatDevices.length > 0">
      <DevicesListItems :devices="hubitatDevices" />

      <div class="text-overline text-center">End Results</div>
    </v-list>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DevicesListItems from "./DevicesListItems";

export default {
  name: "hd-DevicesList",
  components: {
    DevicesListItems,
  },
  computed: {
    ...mapGetters({
      hubitatDevices: "devices/getHubitatDevices",
      hubitatLoading: "devices/getHubitatLoading",
    }),
  },
};
</script>

<style scoped></style>
