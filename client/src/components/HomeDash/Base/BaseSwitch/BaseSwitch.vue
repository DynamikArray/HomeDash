<template>
  <BaseTransition name="baseSwitch_" :id="device.id" :slideX="true" :slideY="false">
    <v-card class="baseSwitchCard">
      <v-card-title>
        <div class="text-subtitle-1">
          {{ device.label }}
        </div>
      </v-card-title>
    </v-card>
  </BaseTransition>
</template>

<script>
import BaseTransition from "@/components/HomeDash/Base/BaseTransition//BaseTransition";

export default {
  name: "hd-BaseSwitch",
  components: {
    BaseTransition,
  },
  props: {
    device: {
      type: [Object],
    },
  },
};
</script>

<style scoped>
.baseSwitchCard {
  min-width: 10vw;
  max-width: 20vw;
}
</style>
