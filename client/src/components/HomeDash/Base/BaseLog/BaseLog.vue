<template>
  <BaseTransition :name="name" :id="id" :slideX="slideX" :slideY="slideY">
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
      type: [Number, String],
    },
    slideX: {
      type: [Boolean],
      default: false,
    },
    slideY: {
      type: [Boolean],
      default: true,
    },
  },
};
</script>

<style scoped></style>
