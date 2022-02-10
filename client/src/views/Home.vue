<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <p>ADD SOME COMPONENTS</p>
        <Devices />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Devices from "@/components/Devices/Devices.vue";

export default {
  name: "Home",

  components: { Devices },
};
</script>
