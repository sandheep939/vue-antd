<template>
  <div>
    <Pagination
      v-model:current="current" 
      v-model:pageSize="pageSize"
      :total="total"
      :disabled="disabled"
      show-size-changer
      @showSizeChange="handleSizeChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref } from "vue";
import { Pagination } from "ant-design-vue";

// Define props
const props = defineProps({
  current: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  }
});

const emit = defineEmits<{
  (e: 'showSizeChange', current: number, pageSize: number): void;
  (e: 'update:current', value: number): void;
  (e: 'update:pageSize', value: number): void;
}>();

const current = ref(props.current);
const pageSize = ref(props.pageSize);

const handleSizeChange = (current: number, pageSize: number) => {
  emit('showSizeChange', current, pageSize);
  emit('update:current', current);
  emit('update:pageSize', pageSize);
};
</script>
