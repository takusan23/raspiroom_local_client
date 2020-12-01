<template>
  <v-card color="red" class="pa-5" outlined>
    <v-icon class="white--text text-truncate">mdi-thermometer-alert</v-icon>
    <span text class="white--text">温度</span>
    <v-row justify="center" align-content="center">
      <span style="font-size: 30px" class="white--text">{{ temp }}度</span>
    </v-row>
    <span class="white--text">取得日時:{{ date }}</span>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    /** 温度。 */
    temp: Number,
    /**取得日時。文字列で */
    date: String,
  },
});
</script>