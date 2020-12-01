<template>
  <v-card class="pa-5" outlined>
    <span style="font-size: 20px">リモコン</span>
    <v-row>
      <v-col>
        <v-row justify="center" align-content="center">
          <v-switch
            class="ma-2"
            :input-value="isLedOn"
            label="LED"
            inset
            @click="
              isLedOn = !isLedOn;
              sendIr('led', isLedOn);
            "
          />
        </v-row>
      </v-col>
      <v-col>
        <v-row justify="center" align-content="center">
          <v-switch
            class="ma-2"
            :input-value="isTvOn"
            label="赤外線テスト"
            inset
            @click="
              isTvOn = !isTvOn;
              sendIr('light', isTvOn);
            "
          />
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { database } from "firebase";
import Vue from "vue";

import api from "@/ts/API";

export default Vue.extend({
  data: () => ({
    isLedOn: false,
    isTvOn: false,
    key: "",
  }),
  async created() {
    const response = await api.getIrData();
    this.isLedOn = response["led"]
    this.isTvOn = response["tv"]
  },
  methods: {
    /**
     * 赤外線を送信する
     * @param device デバイス名
     * @param isOn ONにするかOFFにするか
     */
    async sendIr(device: string, isOn: boolean) {
      await api.postIr(device, isOn);
    },
  },
});
</script>