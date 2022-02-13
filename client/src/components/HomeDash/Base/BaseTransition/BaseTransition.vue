<template>
  <div>
    <v-slide-y-reverse-transition mode="out-in" v-if="slideY">
      <div :key="`base_control_${name}_${id}`">
        <slot></slot>
      </div>
    </v-slide-y-reverse-transition>
    <v-slide-x-reverse-transition mode="out-in" v-if="slideX">
      <div :key="`base_control_${name}_${id}`">
        <slot></slot>
      </div>
    </v-slide-x-reverse-transition>
  </div>
</template>

<script>
export default {
  name: "hd-BaseTransition",
  props: {
    name: {
      type: [String],
    },
    id: {
      type: [Number, String],
    },
    slideY: {
      type: [Boolean],
      default: true,
    },
    slideX: {
      type: [Boolean],
      default: false,
    },
  },
};
</script>

<style scoped></style>
