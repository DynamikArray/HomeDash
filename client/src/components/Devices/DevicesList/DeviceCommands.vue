<template>
  <div class="hd-DeviceCommands">
    <v-tooltip left color="grey darken-3 shadow-small" :open-on-focus="false" :open-on-hover="false">
      <template v-slot:activator="{ on, attrs }">
        <v-chip label color="warning darken-2" small v-bind="attrs" v-on="on" class="shadow">
          <span class="mr-1 tiny">{{ numberOfItems }}</span
          >Commands
        </v-chip>
      </template>
      <h5>Device Commands</h5>
      <div class="" v-for="(command, index) in commands" :key="`${command}_${index}`">
        <li class="caption">
          {{ command }}
        </li>
      </div>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  name: "hd-DeviceCommands",
  props: {
    commands: {
      type: [Boolean, Array],
    },
  },
  computed: {
    numberOfItems() {
      return this.commands.length;
    },
  },
};
</script>

<style scoped></style>
