<template>
  <v-slide-y-reverse-transition mode="out-in">
    <div :key="`base_control_${name}_${id}`">
      <slot></slot>
    </div>
  </v-slide-y-reverse-transition>
</template>

<script>
export default {
  name: "hd-BaseTransition",
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
