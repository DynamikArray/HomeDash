<template>
  <v-list color="secondary darken-1 px-4 ma-0" two-line class="text-left">
    <BaseLog :name="name" :id="+id">
      <v-list-item
        v-for="(message, index) in items"
        :key="Date.now() + message.deviceId + '_' + index"
        class="secondary rounded-lg px-4 darken-4 my-4"
      >
        <v-list-item-content>
          <v-list-item-title> {{ message.displayName }} </v-list-item-title>
          <v-list-item-subtitle>
            {{ message.descriptionText }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </BaseLog>
  </v-list>
</template>

<script>
import BaseLog from "@/components/HomeDash/Base/BaseLog/BaseLog";

export default {
  name: "hd-HubMultiEventList",
  components: {
    BaseLog,
  },
  props: {
    items: {
      type: [Boolean, Array],
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
