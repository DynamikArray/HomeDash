<template>
  <div class="hd-DeviceCapabilities">
    <v-tooltip left color="grey darken-3 shadow-small" :open-on-focus="false" :open-on-hover="false">
      <template v-slot:activator="{ on, attrs }">
        <v-chip label color="green darken-2" small v-bind="attrs" v-on="on" class="shadow">
          <span class="mr-1 tiny">{{ numberOfItems }}</span
          >Capabilities
        </v-chip>
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
