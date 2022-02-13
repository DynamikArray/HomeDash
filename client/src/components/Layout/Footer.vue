<template>
  <v-footer app class="secondary darken-2 subtitle-2 font-weight-light white--text" inset>
    <div class="d-flex align-center justify-start flex-grow-1 pt-1">
      <div class="d-flex align-baseline mx-3">
        <ServerSocketStatus />
      </div>

      <div class="d-flex align-baseline mx-3">
        <div class="mr-3">Live Event Stream:</div>
        <BaseLog
          name="footerRecentEvent"
          :id="`${mostRecent.deviceId}-${mostRecent.value}`"
          :slideX="true"
          :slideY="false"
        >
          <div class="text-caption" v-if="mostRecent">
            Source: {{ mostRecent.source }} - Name: {{ mostRecent.name }} - DeviceId: {{ mostRecent.deviceId }} -
            DisplayName: {{ mostRecent.displayName }} - Value: {{ mostRecent.value }} - Desc:
            {{ mostRecent.descriptionText }}
          </div>
          <div v-if="!mostRecent">No events yet.</div>
        </BaseLog>
      </div>
    </div>
  </v-footer>
</template>

<script>
import BaseLog from "@/components/HomeDash/Base/BaseLog/BaseLog";
import ServerSocketStatus from "@/components/Socket/ServerSocketStatus";

import { mapGetters } from "vuex";

export default {
  name: "hd-Footer",
  components: {
    BaseLog,
    ServerSocketStatus,
  },
  computed: {
    ...mapGetters({
      mostRecent: "hubEvents/getMostRecentEvent",
    }),
  },
};
</script>

<style scoped></style>
