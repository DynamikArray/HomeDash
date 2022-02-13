<template>
  <div class="d-flex align-center mx-2 mt-1 shadow-small">
    <div class="d-flex mr-2">Server Connection</div>
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
  name: "hd-ServerSocketStatus",
  computed: {
    ...mapGetters({
      socketStatus: "getSocketStatus",
      socketStatusMessage: "getSocketStatusMessage",
    }),
  },
};
</script>

<style scoped></style>
