<template>
  <div class="grey darken-3 pa-1">
    <div class="pa-2">
      <h4 class="text-left">
        <v-icon small>fas fa-laptop-house</v-icon>
        Device Information
      </h4>
      <v-divider class="my-2"></v-divider>
      <p class="caption">
        Search and Filter all devices. This includes all devices shared from Hubitat and saved to HomeDash. You may view
        their attributes, capabilities & commands, as well as configure them for use inside of HomeDash.
      </p>
    </div>

    <DevicesList />
  </div>
</template>

<script>
import DevicesList from "./DevicesList/DevicesList";
export default {
  name: "hd-DevicesDrawerTab",
  components: {
    DevicesList,
  },
};
</script>

<style scoped></style>
