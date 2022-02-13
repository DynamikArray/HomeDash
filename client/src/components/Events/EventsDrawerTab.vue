<template>
  <div class="pa-1">
    <div class="text-center text-h6">Events List:</div>
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
