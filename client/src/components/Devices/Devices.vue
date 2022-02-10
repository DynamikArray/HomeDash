<template>
  <div>
    <div>Devices</div>
    <div class="grey darken-4">
      <p>Stuff and things</p>
      {{ hubitatResults }}
    </div>
  </div>
</template>

<script>
import { FETCH_DEVICES_HUBITAT } from "@/store/store.constants.js";
import { mapGetters } from "vuex";

export default {
  name: "Devices",
  components: {},
  async mounted() {
    await this.$store.dispatch(`devices/${FETCH_DEVICES_HUBITAT}`);
  },
  computed: {
    ...mapGetters({
      hubitatResults: "devices/getHubitatResults",
      hubitatLoading: "devices/getHubitatLoading",
    }),
  },
};
</script>

<style scoped></style>
