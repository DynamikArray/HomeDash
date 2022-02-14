<template>
  <div>
    <div>Devices</div>
    <div v-if="hubitatDevices.length > 0" class="d-flex align-start justify-start flex-wrap">
      <div class="d-flex ma-4" v-for="device in hubitatDevices" :key="device.id">
        <BaseSwitch :device="device" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import BaseSwitch from "@/components/HomeDash/Base/BaseSwitch/BaseSwitch";

export default {
  name: "Devices",
  components: {
    BaseSwitch,
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
