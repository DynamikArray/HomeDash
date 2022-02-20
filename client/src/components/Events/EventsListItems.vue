<template>
  <div class="hd-EventsListItems">
    <v-list-item
      v-for="(message, index) in allEvents"
      :key="Date.now() + message.deviceId + '_' + index"
      class="secondary rounded-lg darken-4 mb-2"
    >
      <v-list-item-avatar>
        <v-icon>{{ iconType(message.name) }}</v-icon>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title class="ma-0 pa-0">
          <div class="d-flex align-center justify-space-between">
            <div class="d-flex align-center">
              {{ message.displayName }}
            </div>
            <div class="d-flex align-center" v-if="message.counter > 1">
              {{ message.counter }}
            </div>
          </div>
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ message.descriptionText }}
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar width="80px" tile> {{ message.value }} {{ unitValue(message.unit) }} </v-list-item-avatar>
    </v-list-item>
  </div>
</template>

<script>
const { EVENT_NAMES } = require("@/constants/events.constants.js");

export default {
  name: "hd-EventsListItems",
  props: {
    allEvents: {
      type: [Boolean, Array],
      default: false,
    },
  },
  methods: {
    /**
     */
    iconType(val) {
      let iconString = "";

      if (EVENT_NAMES[val]) {
        iconString = EVENT_NAMES[val].iconString;
      } else {
        iconString = "fas fa-question-circle";
      }

      return iconString;
    },
    /**
     */
    unitValue(unit) {
      if (unit === null || unit === "null") {
        return "";
      } else {
        return unit;
      }
    },
  },
};
</script>

<style scoped></style>
