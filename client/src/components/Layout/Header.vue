<template>
  <v-app-bar app color="primary" dark :maxHeight="50">
    <div class="d-flex align-center">
      <h2 class="shadow">{{ applicationName }}</h2>
    </div>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  name: "st-header",
  computed: {
    applicationName() {
      return this.$config.APPLICATION_NAME;
    },
  },
};
</script>

<style>
.v-app-bar .v-toolbar__content {
  height: 50px !important;
}
</style>
