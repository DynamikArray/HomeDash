<template>
  <div class="hd-DeviceActionMenu">
    <v-menu left offset-x>
      <template v-slot:activator="{ on, attrs }">
        <v-btn rounded v-bind="attrs" v-on="on" small icon color="grey lighten-1">
          <v-icon small>fas fa-ellipsis-v</v-icon>
        </v-btn>
      </template>

      <v-list dense>
        <v-subheader><div class="text-subtitle-1">Available Device Actions:</div></v-subheader>
        <v-list-item-group color="primary">
          <v-list-item @click="addDevice" exact-path>
            <v-list-item-action>
              <v-btn icon color="primary"><v-icon>fa fa-plus</v-icon></v-btn>
            </v-list-item-action>
            <v-list-item-title>Add to HomeDash</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "hd-DeviceActionMenu",
  methods: {
    addDevice() {
      this.$emit("clicked");
    },
  },
};
</script>

<style scoped></style>
