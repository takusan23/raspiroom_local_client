// ログイン

<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-row justify="center" align-content="center">
          <v-btn color="accent" @click="login">Googleでログイン</v-btn>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    login() {
      // ログイン処理はStoreに委託する
      this.$store.dispatch("login");
    },
  },
});
</script>