<template>
  <div class="d-flex align-center mx-2 mt-1 shadow-small">
    <div class="d-flex mr-2">Connection Status</div>
    <div v-if="socketStatus" class="d-flex">
      <v-icon small color="green">fa fa-check-circle</v-icon>
    </div>
    <div v-else class="d-flex">
      <v-icon small color="red">fas fa-exclamation-circle</v-icon>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SocketStatus",
  computed: {
    ...mapGetters({
      socketStatus: "getSocketStatus",
      socketStatusMessage: "getSocketStatusMessage",
    }),
  },
};
</script>

<style scoped></style>
