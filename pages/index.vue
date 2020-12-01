// トップページ

<template>
  <v-container>
    <v-row>
      <v-col>
        <update-card></update-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <temperature-card
          :temp="this.$store.state.tempList[0].temp"
          :date="toFormatTime(this.$store.state.tempList[0].date.seconds)"
        />
      </v-col>
      <v-col>
        <humid-card
          :humid="this.$store.state.tempList[0].humid"
          :date="toFormatTime(this.$store.state.tempList[0].date.seconds)"
        />
      </v-col>
      <v-col>
        <cpu-temp-card
          :cpu_temp="this.$store.state.tempList[0].cpu_temp"
          :date="toFormatTime(this.$store.state.tempList[0].date.seconds)"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="pa-5" outlined>
          <bar-chart
            chart_title="温度"
            :chart_data="this.$store.state.tempList"
            chart_key="temp"
          />
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <control />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="pa-5" outlined>
          <span style="font-size: 20px">データベース</span>
          <v-list-item
            two-line
            v-for="item in this.$store.state.tempList"
            v-bind:key="item.date.seconds"
          >
            <v-list-item-content>
              <v-list-item-title
                >{{ item.temp }}度 / {{ item.humid }} %</v-list-item-title
              >
              <v-list-item-subtitle>{{
                toFormatTime(item.date.seconds)
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
// Firebase
import firebase from "../plugins/firebase";
const cloudFirestore = firebase.firestore();
// 温度データベース
const tempDB = cloudFirestore.collection("sensor");
// 型
import DatabaseObject from "@/ts/DetabaseObject.ts";
// 時間変換
import toTimeFormat from "@/ts/FormatTime.ts";

export default Vue.extend({
  async asyncData({ store }) {
    await store.dispatch("getSensorData");
    return {};
  },
  data: () => ({}),
  watch: {},
  methods: {
    // 秒をきれいな形に変換する関数
    toFormatTime(unixTime: number): string {
      return toTimeFormat(unixTime);
    },
  },
});
</script>
