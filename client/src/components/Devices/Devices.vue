<template>
  <div>
    <div>Devices</div>
    <div class="grey darken-4">
      <p>Stuff and things</p>

      <v-list three-line class="text-left">
        <v-list-item v-for="device in hubitatDevices" :key="device.id">
          <v-list-item-content>
            <v-list-item-title>
              {{ device.label }}
            </v-list-item-title>
            <v-list-item-subtitle>
              <div class="d-flex align-start">
                <div class="mr-3 text-subtitle2">
                  <span class="">Name:</span> <span class="font-weight-bold"> {{ device.name }}</span>
                </div>
                <div class="mr-3 text-subtitle2">
                  <span class="">Type:</span> <span class="font-weight-bold"> {{ device.type }}</span>
                </div>
              </div>
            </v-list-item-subtitle>
            <div class="d-flex text-caption">
              {{ device.commands }}
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<script>
import { FETCH_DEVICES_HUBITAT } from "@/store/store.constants.js";
import { mapGetters } from "vuex";

export default {
  name: "Devices",
  components: {},
  async mounted() {
    await this.$store.dispatch(`devices/${FETCH_DEVICES_HUBITAT}`);
  },
  computed: {
    ...mapGetters({
      hubitatDevices: "devices/getHubitatDevices",
      hubitatLoading: "devices/getHubitatLoading",
    }),
  },
};
</script>

<style scoped></style>
