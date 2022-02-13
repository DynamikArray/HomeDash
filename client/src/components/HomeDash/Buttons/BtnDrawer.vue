<template>
  <div>
    <v-btn icon @click="onClickHandler"><v-icon class="shadow">fas fa-columns</v-icon></v-btn>
  </div>
</template>

<script>
import { APP_TOGGLE_DRAWER } from "@/store/store.constants.js";

export default {
  name: "hd-BtnDrawer",
  methods: {
    onClickHandler() {
      this.$store.commit(`app/${APP_TOGGLE_DRAWER}`);
    },
  },
};
</script>

<style scoped></style>
