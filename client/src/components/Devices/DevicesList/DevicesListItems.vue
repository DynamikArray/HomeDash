<template>
  <div class="hd-DevicesListItems">
    <v-list-item
      v-for="(device, index) in devices"
      :key="Date.now() + device.deviceId + '_' + index"
      class="secondary rounded-lg darken-4 mb-2"
    >
      <v-list-item-avatar>
        <v-icon>{{ iconType(device.type) }}</v-icon>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title class="ma-0 pa-0">
          <div class="d-flex align-center justify-space-between">
            <div class="d-flex align-center">
              {{ device.label }}
            </div>
            <div class="d-flex align-baseline">
              <DeviceActionMenu @clicked="addDeviceHandler(device)" />
            </div>
          </div>
        </v-list-item-title>
        <v-list-item-subtitle>
          <div class="d-flex align-baseline my-1">
            <!--<div class="">Id: {{ device.id }}</div> -->
            <div class="">
              {{ device.name }}
            </div>
          </div>
        </v-list-item-subtitle>
        <div class="d-flex justify-space-between">
          <div class="d-flex align-start justify-start">
            <DeviceAttributes :attributes="device.attributes" />
          </div>
          <div class="d-flex align-start justify-start">
            <DeviceCapabilities :capabilities="device.capabilities" />
          </div>
          <div class="d-flex align-start justify-start">
            <DeviceCommands :commands="device.commands" />
          </div>
        </div>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
import { CREATE_DEVICE_HD } from "@/store/store.constants.js";
import { DEVICE_TYPES } from "@/constants/devices.constants.js";

import DeviceAttributes from "./DeviceAttributes";
import DeviceCapabilities from "./DeviceCapabilities";
import DeviceCommands from "./DeviceCommands";
import DeviceActionMenu from "./DeviceActionMenu";

export default {
  name: "hd-DevicesListItems",
  props: {
    devices: {
      type: [Boolean, Array],
      default: false,
    },
  },
  components: {
    DeviceAttributes,
    DeviceCapabilities,
    DeviceCommands,
    DeviceActionMenu,
  },
  methods: {
    addDeviceHandler(device) {
      this.$store.dispatch(`devices/${CREATE_DEVICE_HD}`, device);
    },

    /*

     */
    iconType(val) {
      let iconString = "";

      if (DEVICE_TYPES[val]) {
        iconString = DEVICE_TYPES[val].iconString;
      } else {
        iconString = "fas fa-question-circle";
      }

      return iconString;
    },
    /*

     */
    unitValue(unit) {
      if (unit === null || unit === "null") {
        return "";
      } else {
        return unit;
      }
    },
  },
};
</script>

<style scoped></style>
