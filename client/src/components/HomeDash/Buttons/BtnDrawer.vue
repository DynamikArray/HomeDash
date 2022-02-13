<template>
  <div class="d-flex">
    <div v-if="closeButton" class="d-flex align-top mt-1 mr-1">
      <v-btn icon @click="onClickHandler"><v-icon>far fa-times-circle</v-icon></v-btn>
    </div>

    <div v-if="!closeButton" class="d-flex align-baseline justify-end">
      <div class="shadow">Devices & Events</div>
      <v-btn icon @click="onClickHandler"><v-icon class="shadow">fas fa-columns</v-icon></v-btn>
    </div>
  </div>
</template>

<script>
import { APP_TOGGLE_DRAWER } from "@/store/store.constants.js";

export default {
  name: "hd-BtnDrawer",
  props: {
    closeButton: {
      type: [Boolean],
      default: false,
    },
  },
  methods: {
    onClickHandler() {
      this.$store.commit(`app/${APP_TOGGLE_DRAWER}`);
    },
  },
};
</script>

<style scoped></style>
