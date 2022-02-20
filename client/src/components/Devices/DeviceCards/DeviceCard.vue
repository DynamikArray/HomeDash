<template>
  <v-card color="secondary darken-1" class="fill-height">
    <DeviceCardTitle :device="device" />
    <DeviceCardContent :device="device" />
  </v-card>
</template>

<script>
import DeviceCardTitle from "./DeviceCardTitle";
import DeviceCardContent from "./DeviceCardContent";
export default {
  name: "hd-DeviceCard",
  components: {
    DeviceCardTitle,
    DeviceCardContent,
  },
  props: {
    device: {
      type: [Object],
    },
  },
};
</script>

<style scoped></style>
