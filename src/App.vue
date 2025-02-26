<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import RxButton from "@/components/rx-button.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const handleClick = () => {
  console.log("Hye");
  toggleDark();
};
</script>

<template>
  <div class="bg-primary-bg h-dvh">
    Hello World
    <RxButton @click="handleClick">
      <template #default> Click me </template>
    </RxButton>
  </div>
</template>
