<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <Dashboard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Dashboard from "@/components/Dashboard/Dashboard.vue";

export default {
  name: "Home",

  components: { Dashboard },
};
</script>
