<template>
  <h1 align="center">Daily Questions</h1>
  <VContainer>
    <VRow>
      <h3>How do I feel?</h3>
    </VRow>
    <VRow>
      <VCol><VBtn rounded color="yellow" size="large" block>Happy</VBtn></VCol>
      <VCol><VBtn rounded color="cyan" size="large" block>Sad</VBtn></VCol>
      <VCol><VBtn rounded color="red" size="large" block>Angry</VBtn></VCol>
    </VRow>
    <VRow>
      <VCol><VBtn rounded color="pink" size="large" block>Anxious</VBtn></VCol>
      <VCol><VBtn rounded color="grey" size="large" block>Neutral</VBtn></VCol>
      <VCol><VBtn rounded color="green" size="large" block>Empty</VBtn></VCol>
    </VRow>
    <VRow>
      <VCol
        ><VBtn rounded color="blue" size="large" block>Depressed</VBtn></VCol
      >
      <VCol><VBtn rounded color="purple" size="large" block>Tired</VBtn></VCol>
      <VCol
        ><VBtn rounded color="orange" size="large" block>Exhausted</VBtn></VCol
      >
    </VRow>
    <VRow
      ><VCol>Did I eat breakfast?</VCol
      ><VCol align="right">
        <v-btn-toggle v-model="toggleBreakfast" color="primary" mandatory>
          <v-btn value="yes">Yes</v-btn>
          <v-btn value="no">No</v-btn>
        </v-btn-toggle>
      </VCol></VRow
    >
    <VRow
      ><VCol>Did I eat lunch?</VCol
      ><VCol align="right"
        ><v-btn-toggle v-model="toggleLunch" color="primary" mandatory>
          <v-btn value="yes">Yes</v-btn>
          <v-btn value="no">No</v-btn>
        </v-btn-toggle></VCol
      ></VRow
    >
    <VRow
      ><VCol>Did I eat dinner?</VCol
      ><VCol align="right"
        ><v-btn-toggle v-model="toggleDinner" color="primary" mandatory>
          <v-btn value="yes">Yes</v-btn>
          <v-btn value="no">No</v-btn>
        </v-btn-toggle></VCol
      ></VRow
    >
    <VRow
      ><VCol>Did I take my medicine?</VCol
      ><VCol align="right"
        ><v-btn-toggle v-model="toggleMeds" color="primary" mandatory>
          <v-btn value="yes">Yes</v-btn>
          <v-btn value="no">No</v-btn>
        </v-btn-toggle></VCol
      ></VRow
    >
    <VRow><VCol>Depression Symptoms</VCol></VRow>
    <VRow>
      <VCol
        ><v-slider
          :ticks="tickLabels"
          :max="3"
          step="1"
          show-ticks="always"
          tick-size="4"
        >
        </v-slider></VCol
    ></VRow>
    <VRow><VCol>Anxiety Symptoms</VCol></VRow>
    <VRow>
      <VCol
        ><v-slider
          :ticks="tickLabels"
          :max="3"
          step="1"
          show-ticks="always"
          tick-size="4"
        >
        </v-slider></VCol
    ></VRow>
    <VRow><VCol>Self-Deprecating Thoughts</VCol></VRow>
    <VRow>
      <VCol
        ><v-slider
          :ticks="tickLabels"
          :max="3"
          step="1"
          show-ticks="always"
          tick-size="4"
        >
        </v-slider></VCol
    ></VRow>
    <VRow><VCol>Suicidal Thoughts</VCol></VRow>
    <VRow>
      <VCol
        ><v-slider
          :ticks="tickLabels"
          :max="3"
          step="1"
          show-ticks="always"
          tick-size="4"
        >
        </v-slider></VCol
    ></VRow>
  </VContainer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VCol } from "vuetify/lib/components/index.mjs";

const tickLabels = {
  0: "None",
  1: "Mild",
  2: "Moderate",
  3: "Intense",
};
const toggleBreakfast = ref(undefined);
const toggleLunch = ref(undefined);
const toggleDinner = ref(undefined);
const toggleMeds = ref(undefined);
</script>
