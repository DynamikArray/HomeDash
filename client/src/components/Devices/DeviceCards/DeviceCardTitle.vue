<template>
  <v-card-title class="pa-1">
    <div class="text-truncate text-subtitle-1">
      {{ device.label || device.hubitat.label }}
    </div>
  </v-card-title>
</template>

<script>
export default {
  name: "hd-DeviceCardTitle",
  props: {
    device: {
      type: [Object],
    },
  },
};
</script>

<style scoped></style>
