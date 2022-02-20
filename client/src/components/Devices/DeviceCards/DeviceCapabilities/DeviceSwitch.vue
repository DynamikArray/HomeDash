<template>
  <div>
    <v-switch inset v-model="switchStatus"></v-switch>
  </div>
</template>

<script>
export default {
  name: "hd-DeviceSwitch",
  props: {
    device: {
      type: [Object],
    },
  },
  computed: {
    switchStatus: {
      get() {
        const status = this.device?.hubitat?.attributes?.switch;
        if (!status) return false;
        if (status == "on") return true;
        return false;
      },
      set(value) {
        if (!value) this.device.hubitat.attributes.switch = "off";
        if (value) this.device.hubitat.attributes.switch = "on";
      },
    },
  },
};
</script>

<style scoped></style>
