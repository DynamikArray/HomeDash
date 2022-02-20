<template>
  <div class="d-flex align-center justify-center">
    <div class="d-flex mr-2 text-subtitle-1 text-uppercase">
      {{ switchStatus ? "On" : "Off" }}
    </div>
    <div class="d-flex mx-1">
      <v-switch inset v-model="switchStatus"></v-switch>
    </div>
  </div>
</template>

<script>
import { SEND_DEVICE_COMMAND } from "@/store/store.constants.js";
import { COMMANDS } from "@/constants/command.constants.js";

export default {
  name: "hd-DeviceSwitch",
  props: {
    device: {
      type: [Object],
    },
  },
  computed: {
    deviceId() {
      return this.device?.hubitat?.id;
    },
    switchStatus: {
      get() {
        const status = this.device?.hubitat?.attributes?.switch;
        if (!status) return false;
        if (status == "on") return true;
        return false;
      },
      set(value) {
        if (!value) {
          this.sendCommand(COMMANDS.OFF);
          this.device.hubitat.attributes.switch = COMMANDS.OFF;
        }
        if (value) {
          this.sendCommand(COMMANDS.ON);
          this.device.hubitat.attributes.switch = COMMANDS.ON;
        }
      },
    },
  },
  methods: {
    sendCommand(value) {
      const actionPayload = {
        deviceId: this.deviceId,
        payload: {
          command: value,
        },
      };
      this.$store.dispatch(`devices/${SEND_DEVICE_COMMAND}`, actionPayload);
      console.log("Send this value", actionPayload);
    },
  },
};
</script>

<style scoped></style>
