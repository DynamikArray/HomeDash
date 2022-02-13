<template>
  <div class="pa-1">
    <div class="text-center text-h6">Devices List:</div>
    <DevicesList />
  </div>
</template>

<script>
import DevicesList from "./DevicesList";
export default {
  name: "hd-DevicesDrawerTab",
  components: {
    DevicesList,
  },
};
</script>

<style scoped></style>
