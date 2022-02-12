<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="6">
        <HubEvents />
      </v-col>
      <v-col cols="6">
        <Devices />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Devices from "@/components/Devices/Devices.vue";
import HubEvents from "@/components/HubEvents/HubEvents.vue";

export default {
  name: "Home",

  components: { Devices, HubEvents },
};
</script>
