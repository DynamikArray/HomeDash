<template>
  <div class="ml-1 mr-2">
    <div class="my-2">
      <h3>Most Recent Events:</h3>

      <v-list color="" two-line class="text-left ma-0 pa-0" v-if="allEvents">
        <BaseLog name="EventsListLog" id="EventsListLogId">
          <EventsListItems :allEvents="allEvents" />
        </BaseLog>
        <div class="text-overline text-center">End Results</div>
      </v-list>

      <div v-else class="text-subtitle italic">No events received yet</div>
    </div>
  </div>
</template>

<script>
import BaseLog from "@/components/HomeDash/Base/BaseLog/BaseLog";
import EventsListItems from "@/components/Events/EventsListItems";

import { mapGetters } from "vuex";

export default {
  name: "hd-EventsList",
  components: {
    BaseLog,
    EventsListItems,
  },
  computed: {
    ...mapGetters({
      mostRecent: "hubEvents/getMostRecentEvent",
      allEvents: "hubEvents/getAllEvents",
    }),
  },
};
</script>

<style scoped></style>
