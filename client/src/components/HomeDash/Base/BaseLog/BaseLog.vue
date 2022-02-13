<template>
  <BaseTransition :name="name" :id="id">
    <slot></slot>
  </BaseTransition>
</template>

<script>
import BaseTransition from "@/components/HomeDash/Base/BaseTransition//BaseTransition";

export default {
  name: "hd-BaseLog",
  components: {
    BaseTransition,
  },
  props: {
    name: {
      type: [String],
    },
    id: {
      type: [Number],
    },
  },
};
</script>

<style scoped></style>
