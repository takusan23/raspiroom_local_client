<template>
  <v-card class="pa-5" outlined>
    <v-icon class="text-truncate">mdi-database-sync</v-icon>
    <span text>更新</span>
    <v-btn
      outlined
      style="float: right"
      class="me-1"
      @click="getSensorData"
      color="blue"
    >
      更新 : {{ format(this.$store.state.tempList[0].date.seconds) }}
    </v-btn>
  </v-card>
</template>

<script lang="ts">
import { database } from "firebase";
import Vue from "vue";

import formatTime from "@/ts/FormatTime";

export default Vue.extend({
  data: () => ({}),
  methods: {
    /** データベースから最新の情報を取りに行く */
    getSensorData() {
      this.$store.dispatch("getSensorData");
    },
    format(seconds: number) {
      return formatTime(seconds);
    },
  },
});
</script>