<template>
  <div class="hd-DeviceAttributes">
    <v-tooltip left color="grey darken-3 shadow-small">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="info darken-2" small v-bind="attrs" v-on="on">
          <span class="mr-1 tiny">{{ numberOfItems }}</span
          >Attributes
        </v-btn>
      </template>
      <h5>Device Attributes</h5>
      <div class="" v-for="(attribute, index) in attributes" :key="`${attribute}_${index}`">
        <li class="caption">
          {{ attribute }}
        </li>
      </div>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  name: "hd-DeviceAttributes",
  props: {
    attributes: {
      type: [Boolean, Object],
    },
  },
  computed: {
    numberOfItems() {
      const attributesLength = Object.keys(this.attributes).length;
      return attributesLength;
    },
  },
};
</script>

<style scoped></style>
