// 棒グラフ

<template>
  <!-- グラフ -->
  <!-- propsのchart_dataにはobjectの配列を入れてください -->
  <canvas width="300" height="100" :id="chart_key"></canvas>
</template>

<script lang="ts">
import Vue from "vue";
// グラフライブラリ
import Chart from "chart.js";
// 型情報
import DatabaseObject from "@/ts/DetabaseObject.ts";
// 時間変換
import toTimeFormat from "@/ts/FormatTime.ts";

export default Vue.extend({
  props: {
    chart_data: Array(),
    chart_title: String,
    chart_key: String,
  },
  mounted() {
    // グラフ
    const ctx = <HTMLCanvasElement>document.getElementById(this.chart_key);
    ctx.width = 200;
    ctx.height = 100;

    // 並び変えする
    const databaseObjectList = Array.from(
      this.chart_data as Array<DatabaseObject>
    ).sort((aItem, bItem) => aItem.date.seconds - bItem.date.seconds);

    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: Array.from(
          databaseObjectList.map((item) => this.toFormatTime(item.date.seconds))
        ),
        datasets: [
          {
            label: "温度",
            data: Array.from(
              databaseObjectList.map((item) => {
                return item.temp;
              })
            ),
            backgroundColor: "rgba(255, 255, 255, 0)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "湿度",
            data: Array.from(
              databaseObjectList.map((item) => {
                return item.humid;
              })
            ),
            backgroundColor: "rgba(255, 255, 255, 0)",
            borderColor: "#0099FF",
            borderWidth: 1,
          },
          {
            label: "CPU温度",
            data: Array.from(
              databaseObjectList.map((item) => {
                return item.cpu_temp;
              })
            ),
            backgroundColor: "rgba(255, 255, 255, 0)",
            borderColor: "orange",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  },

  methods: {
    // 秒をきれいな形に変換する関数
    toFormatTime(unixTime: number): string {
      return toTimeFormat(unixTime);
    },
  },
});
</script>