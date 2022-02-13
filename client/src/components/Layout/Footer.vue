<template>
  <v-footer app class="secondary darken-2 subtitle-2 font-weight-light white--text" inset>
    <div class="d-flex align-center justify-end flex-grow-1">
      <div class="d-flex align-start mx-4"><ServerSocketStatus /></div>
      <!--
      <div class="d-flex align-end mx-4">
        <HubitatSocketStatus />
      </div>
    --></div>
  </v-footer>
</template>

<script>
import ServerSocketStatus from "@/components/Socket/ServerSocketStatus";
//import HubitatSocketStatus from "@/components/Socket/HubitatSocketStatus";
export default {
  name: "hd-Footer",
  components: {
    ServerSocketStatus,
    //HubitatSocketStatus,
  },
};
</script>

<style scoped></style>
