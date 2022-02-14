<template>
  <div class="hd-DeviceCapabilities">
    <v-tooltip left color="grey darken-3 shadow-small">
      <template v-slot:activator="{ on, attrs }">
        <v-btn small color="green darken-2" v-bind="attrs" v-on="on">
          <span class="mr-1 tiny">{{ numberOfItems }}</span
          >Capabilities
        </v-btn>
      </template>
      <h5>Device Capabilities</h5>
      <div class="" v-for="(capability, index) in capabilities" :key="`${capability}_${index}`">
        <li class="caption">
          {{ capability }}
        </li>
      </div>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  name: "hd-DeviceCapabilities",
  props: {
    capabilities: {
      type: [Boolean, Array],
    },
  },
  computed: {
    numberOfItems() {
      return this.capabilities.length;
    },
  },
};
</script>

<style></style>
