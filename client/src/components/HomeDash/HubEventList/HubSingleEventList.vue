<template>
  <BaseLog :name="name" :id="id">
    <v-list two-line class="text-left secondary rounded-lg darken-4 ma-0 pa-0">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title> {{ item.displayName }} </v-list-item-title>
          <v-list-item-subtitle>
            {{ item.descriptionText }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </BaseLog>
</template>

<script>
import BaseLog from "@/components/HomeDash/Base/BaseLog/BaseLog";

export default {
  name: "hd-HubSingleEventList",
  components: {
    BaseLog,
  },
  props: {
    item: {
      type: [Boolean, Object],
    },
    name: {
      type: [String],
    },
    id: {
      type: [String, Number],
    },
  },
};
</script>

<style scoped></style>
