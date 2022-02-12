<template>
  <div>
    <div>Events</div>
    <div class="grey darken-4 my-2">
      <h3>Most Recent Event</h3>
      <v-list two-line class="text-left">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title> {{ mostRecent.displayName }} </v-list-item-title>
            <v-list-item-subtitle>
              {{ mostRecent.descriptionText }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>

    <div class="grey darken-4 my-2">
      <h3>Last 100 Events</h3>
      <v-list two-line class="text-left">
        <v-list-item v-for="(message, index) in allEvents" :key="Date.now() + message.deviceId + '_' + index">
          <v-list-item-content>
            <v-list-item-title> {{ mostRecent.displayName }} </v-list-item-title>
            <v-list-item-subtitle>
              {{ mostRecent.descriptionText }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HubEvents",
  components: {},
  computed: {
    ...mapGetters({
      mostRecent: "hubEvents/getMostRecentEvent",
      allEvents: "hubEvents/getAllEvents",
    }),
  },
};
</script>

<style scoped></style>
