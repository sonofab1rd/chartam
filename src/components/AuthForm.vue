<template>
  <v-form class="ma-4" ref="form">
    <div>
      <VTextField
        label="Email Address"
        :class="getClass"
        :rules="[rules.email, rules.required]"
      />
      <VTextField
        label="Password"
        :class="getClass"
        :rules="[rules.password, rules.required]"
      />
      <div :class="getClass" align="center">
        <VBtn type="submit" class="mb-4" @click.prevent="handleSubmit"
          >Sign {{ signIn ? "In" : "Up" }}</VBtn
        >
        <div class="mb-4">
          <VBtn @click.prevent="toggleSignIn" variant="plain"
            >Sign {{ signIn ? "Up" : "In" }}</VBtn
          >
        </div>
      </div>
    </div>
  </v-form>
  <VImg
    :class="getClass"
    align="center"
    src="@/assets/istockphoto-1305271022-612x612.jpg"
    max-height="125"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { computed } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
import { useRouter } from "vue-router";
const router = useRouter();
const { mdAndUp } = useDisplay();
const getClass = computed(() => {
  if (mdAndUp.value) {
    return "w-25";
  } else return "";
});
const signIn = ref(true);
function toggleSignIn() {
  signIn.value = !signIn.value;
}
async function handleSubmit() {
  if (signIn.value) {
    await authenticate();
    router.push({ name: "questions" });
  } else {
    await register();
    router.push({ name: "questions" });
  }
}
async function authenticate() {}
async function register() {}
const rules = {
  required: (value: any) => !!value || "Required",
  email: (value: any) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || "Invalid e-mail";
  },
  password: (value: any) => {
    const pattern =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.?/~_+-=|]).{8,32}$/;
    return pattern.test(value) || "Invalid password";
  },
};
</script>
