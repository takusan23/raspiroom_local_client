<template>
  <v-card color="orange" class="pa-5" outlined>
    <v-icon class="white--text text-truncate">mdi-cpu-64-bit</v-icon>
    <span text class="white--text">CPU温度</span>
    <v-row justify="center">
      <span style="font-size:30px" class="white--text">{{cpu_temp}}度</span>
    </v-row>
      <span class="white--text">取得日時:{{date}}</span>
</v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    /** 湿度 */
    cpu_temp:Number,
    /**取得日時。文字列で */
    date:String
  },
});
</script>