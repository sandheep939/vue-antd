<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import RxButton from "@/components/rx-button.vue";
import Pagination from "@/components/rx-pagination.vue";
import { ref } from "vue";

const currentPage = ref(1);
const pageSize = 10;
const isDark = useDark();
const toggleDark = useToggle(isDark);

const handleClick = () => {
  console.log("Hye");
  toggleDark();
};

const onShowSizeChange = (current: number, pageSize: number) => {
  currentPage.value = current;
  pageSize.value = pageSize;
};
</script>

<template>
  <div class="bg-primary-bg h-dvh">
    Hello World
    <RxButton @click="handleClick">
      <template #default> Click me </template>
    </RxButton>
    <div>
      <Pagination
        v-model:current="currentPage"
        v-model:pageSize="pageSize"
        :total="500"
        @showSizeChange="onShowSizeChange"
      />
    </div>
  </div>
</template>
