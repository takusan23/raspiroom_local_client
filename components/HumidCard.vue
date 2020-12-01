<template>
  <v-card color="blue" class="pa-5" outlined>
    <v-icon class="white--text text-truncate">mdi-water-percent</v-icon>
    <span text class="white--text">湿度</span>
    <v-row justify="center">
      <span style="font-size:30px" class="white--text">{{humid}}%</span>
    </v-row>
      <span class="white--text">取得日時:{{date}}</span>
</v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    /** 湿度 */
    humid:Number,
    /**取得日時。文字列で */
    date:String
  },
});
</script>