<template>
  <v-list color="" two-line class="text-left ma-0 pa-0">
    <BaseLog :name="name" :id="+id">
      <v-list-item
        v-for="(message, index) in items"
        :key="Date.now() + message.deviceId + '_' + index"
        class="secondary rounded-lg darken-4 mb-2"
      >
        <v-list-item-content>
          <v-list-item-title class="ma-0 pa-0"> {{ message.displayName }} </v-list-item-title>
          <v-list-item-subtitle>
            {{ message.descriptionText }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </BaseLog>
    <div class="text-overline text-center">End Results</div>
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
