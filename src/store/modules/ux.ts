import { defineStore } from "pinia";
import { ref } from "vue";

export const useUxStore = defineStore("ux", () => {
  const drawer = ref(true);

  function hideShowDrawer() {
    drawer.value = !drawer.value;
  }

  function $reset() {
    drawer.value = false;
  }

  return { drawer, hideShowDrawer, $reset };
});
