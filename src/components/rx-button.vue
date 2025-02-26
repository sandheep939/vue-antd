<script setup lang="ts">
import { Button, type ButtonProps as AntDButtonProps } from "ant-design-vue";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define the button variants
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 px-3 py-2",
  {
    variants: {
      variant: {
        primary: "bg-primary-theme-bg text-primary-theme-fg ",
        secondary: "",
        secoundaryGray: "",
        secoundaryGray2: "",
        tertiary: "",
        tertiaryGray: "",
        link: "",
        linkGray: "",
      },
      size: {
        sm: "",
        md: "",
      },
      error: {
        true: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
      error: false,
    },
  },
);

export interface ButtonProps extends Omit<AntDButtonProps, "size"> {
  // as?: string;
  class?: string;
  variant?: NonNullable<Parameters<typeof buttonVariants>[0]>["variant"];
  size?: NonNullable<Parameters<typeof buttonVariants>[0]>["size"];
  error?: NonNullable<Parameters<typeof buttonVariants>[0]>["error"];
}

// Define props with type annotations
const allProps = defineProps<ButtonProps>();

const { variant = "primary", size = "sm", error, ...props } = allProps;
</script>

<template>
  <Button
    v-bind="props"
    :class="cn(buttonVariants({ variant, size, error }), props.class ?? '')"
  >
    <template #icon>
      <slot name="left_icon" />
    </template>
    <slot />
    <slot name="right_icon" />
  </Button>
</template>
