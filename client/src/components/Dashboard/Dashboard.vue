<template>
  <section>
    <div class="hd-gridLayout">
      <grid-layout
        :layout="deviceLayout"
        :col-num="colNum"
        :row-height="30"
        :is-draggable="draggable"
        :is-resizable="resizable"
        :responsive="responsive"
        :vertical-compact="true"
        :use-css-transforms="true"
        @breakpoint-changed="breakpointChangedEvent"
      >
        <grid-item
          v-for="item in deviceLayout"
          :static="item.static"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
          :key="item.i"
        >
          {{ item.device.hubitat.name }}
        </grid-item>
      </grid-layout>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import VueGridLayout from "vue-grid-layout";
export default {
  name: "hd-Dashboard",
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
  },
  data: () => ({
    responsive: true,
    draggable: true,
    resizable: true,
    colNum: 12,
  }),
  computed: {
    ...mapGetters({
      devices: "devices/getHomedashDevices",
    }),
    deviceLayout() {
      const layout = [];
      let rowNum = 0;
      this.devices.forEach((device, index) => {
        if (layout.length % 6 == 0 && index !== 0) rowNum += 3;
        layout.push({
          x: (layout.length * 2) % (this.colNum || 12),
          y: rowNum,
          w: 2,
          h: 3,
          i: index,
          device,
        });
      });
      return layout;
    },
  },
  methods: {
    breakpointChangedEvent(newBreakpoint, newLayout) {
      console.log("Size was changed vuetify newbreak", this.$vuetify.breakpoint.name, newBreakpoint, newLayout);
    },
  },
};
</script>

<style>
.vue-grid-item {
  background: #777;
}

.vue-grid-item.vue-grid-placeholder {
  background: #eee;
  opacity: 0.2;
  transition-duration: 100ms;
  z-index: 2;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  border: 1px solid #eee;
}

.vue-draggable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#FFFFFF'/></svg>")
    no-repeat;
  background-position: bottom right;
  padding: 0 8px 8px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
