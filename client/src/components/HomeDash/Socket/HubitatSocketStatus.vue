<template>
  <div class="d-flex align-center mx-2 mt-1 shadow-small">
    <div class="d-flex mr-2">Hubitat Connection</div>
    <div v-if="socketStatus" class="d-flex">
      <v-icon small color="green">fa fa-check-circle</v-icon>
    </div>
    <div v-else class="d-flex">
      <v-icon small color="red">fas fa-exclamation-circle</v-icon>
    </div>
  </div>
</template>

<script>
/**
 * This needs allot of work to make the "connect" event valid, we need
 * to set connection status based off some server variable and return that to the clients
 * and then update the connected clients to error and etc
 */
import { mapGetters } from "vuex";

export default {
  name: "hd-HubitatSocketStatus",
  computed: {
    ...mapGetters({
      socketStatus: "getSocketStatus",
      socketStatusMessage: "getSocketStatusMessage",
    }),
  },
};
</script>

<style scoped></style>
