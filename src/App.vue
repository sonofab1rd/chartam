<template>
  <v-app>
    <ChartamAppBar id="app-bar" color="secondary" prominent />
    <ChartamNavDrawer
      v-model="drawer"
      id="core-navigation-drawer"
      color="secondary"
    />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import ChartamAppBar from "@/components/navigation/ChartamAppBar.vue";
import ChartamNavDrawer from "@/components/navigation/ChartamNavDrawer.vue";
import { storeToRefs } from "pinia";
import { useUxStore } from "./store/modules/ux";
const { drawer } = storeToRefs(useUxStore());
</script>
