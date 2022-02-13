<template>
  <div class="ml-1 mr-2">
    <div class="my-2">
      <h3>Most Recent Event:</h3>
      <HubSingleEventList
        v-if="mostRecent"
        :item="mostRecent"
        :name="mostRecent.name"
        :id="`${mostRecent.deviceId}-${mostRecent.value}`"
      />
      <div v-else class="text-subtitle">No events received yet</div>
    </div>

    <div class="my-2">
      <h3>Last 100 Events:</h3>
      <HubMultiEventList v-if="allEvents" :items="allEvents" name="Last100Events" id="HubEvents" />
      <div v-else class="text-subtitle">No events received yet</div>
    </div>
  </div>
</template>

<script>
import HubSingleEventList from "@/components/HomeDash/HubEventList/HubSingleEventList";
import HubMultiEventList from "@/components/HomeDash/HubEventList/HubMultiEventList";

import { mapGetters } from "vuex";

export default {
  name: "hd-EventsList",
  components: {
    HubSingleEventList,
    HubMultiEventList,
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
