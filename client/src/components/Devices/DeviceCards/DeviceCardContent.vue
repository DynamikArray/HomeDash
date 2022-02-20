<template>
  <v-card-text class="pa-1">
    <div class="d-flex align-center justify-space-between">
      <div class="d-flexalign-center">
        <v-icon class="mx-2">{{ iconType(device.hubitat.type) }}</v-icon>
      </div>
      <div class="d-flex align-center justify-end flex-grow-1">
        <div v-if="isSwitch">
          <DeviceSwtich :device="device" />
        </div>
      </div>
    </div>
  </v-card-text>
</template>

<script>
import { hasSwitchCapability, iconType } from "@/util/cardHelpers";
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
  methods: {
    iconType,
  },
};
</script>

<style scoped></style>
