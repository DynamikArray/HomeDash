<template>
  <div class="pa-1 grey darken-3">
    <EventsList />
  </div>
</template>

<script>
import EventsList from "./EventsList";
export default {
  name: "hd-EventsDrawerTab",
  components: {
    EventsList,
  },
};
</script>

<style scoped></style>
