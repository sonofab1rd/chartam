<template>
  <VAppBar>
    <v-app-bar-nav-icon variant="text" @click.stop="hideShowDrawer" />
    <v-app-bar-title>Chartam <VIcon>mdi-sprout</VIcon></v-app-bar-title>
  </VAppBar>
</template>

<script setup lang="ts">
import { VIcon } from "vuetify/lib/components/index.mjs";
import { useUxStore } from "../../store/modules/ux";
const { hideShowDrawer } = useUxStore();
</script>
