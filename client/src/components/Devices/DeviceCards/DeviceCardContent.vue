<template>
  <v-card-text class="pa-1">
    <div class="d-flex">
      <div class="d-flex">icon</div>
      <div class="d-flex">
        <div v-if="isSwitch">
          <DeviceSwtich :device="device" />
        </div>
      </div>
    </div>
  </v-card-text>
</template>

<script>
import { hasSwitchCapability } from "@/util/cardHelpers";
import DeviceSwtich from "./DeviceCapabilities/DeviceSwitch";

export default {
  name: "hd-DeviceCardContent",
  components: {
    DeviceSwtich,
  },
  props: {
    device: {
      type: [Object],
    },
  },
  computed: {
    isSwitch() {
      if (!this.device?.hubitat?.capabilities) return false;
      return hasSwitchCapability(this.device.hubitat.capabilities);
    },
  },
};
</script>

<style scoped></style>
