<template>
  <v-navigation-drawer v-bind="$attrs">
    <template v-for="item in items" :key="item.id">
      <v-list-item :href="item.href" :prepend-icon="item.icon">
        <v-container>
          <v-list-item-title v-if="item.title">{{
            item.title
          }}</v-list-item-title>
        </v-container>
      </v-list-item>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
let items = [
  {
    id: 1,
    href: "/questions",
    icon: "mdi-calendar-check",
    title: "Daily Log",
  },
  {
    id: 2,
    href: "/indicator",
    icon: "mdi-map-marker",
    title: "Indicator Log",
  },
  {
    id: 3,
    href: "/sleep",
    icon: "mdi-weather-night",
    title: "Sleep Log",
  },
  {
    id: 4,
    href: "/gratitude",
    icon: "mdi-hand-heart",
    title: "Gratitude Journal",
  },
  {
    id: 5,
    href: "/goals",
    icon: "mdi-bullseye-arrow",
    title: "Monthly Goals",
  },
  {
    id: 6,
    href: "/todo",
    icon: "mdi-list-box-outline",
    title: "TO-DOS",
  },
  {
    id: 7,
    href: "/directory",
    icon: "mdi-card-account-details-outline",
    title: "Directory",
  },
  {
    id: 8,
    href: "/emergency",
    icon: "mdi-alert-circle-outline",
    title: "Emergency",
  },
  {
    id: 9,
    href: "/other",
    icon: "mdi-help",
    title: "Other",
  },
  {
    id: 10,
    title: "Logout",
    icon: "mdi-lock",
    href: "/",
  },
];
</script>
