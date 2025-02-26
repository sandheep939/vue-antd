import type { Meta, StoryFn } from "@storybook/vue3";
import { fn } from "@storybook/test";
import RxButton, { type ButtonProps } from "@/components/rx-button.vue"; // Updated import path

interface ButtonPropsWithSlot extends ButtonProps {
  default: string;
  left_icon: string;
  right_icon: string;
}

const DEFAULT_SLOT = "Click Me";

// Default export to define metadata
export default {
  title: "Components/RxButton", // Title in Storybook sidebar
  component: RxButton,
  tags: ["autodocs"],
  args: {
    onclick: fn(),
  },
  argTypes: {
    variant: {
      control: "select",
      options: [],
      description: "Button variant",
    },
    size: {
      control: "select",
      options: [],
      description: "Button size",
    },
    error: {
      control: "radio",
      options: [true, false],
      description: "If or not the button represents error state",
    },
    class: {
      control: "text",
      description: "Additional custom classes",
    },
  },
} as Meta;

// Template to be used for all stories
const Template: StoryFn<ButtonPropsWithSlot> = (args) => ({
  components: { RxButton },
  setup() {
    return { args };
  },
  template: `
    <RxButton v-bind="args">
      <template v-if="${"left_icon" in args}" v-slot:left_icon>${args.left_icon}</template>
      <template v-if="${"default" in args}" v-slot>${args.default}</template>
      <template v-if="${"right_icon" in args}" v-slot:right_icon>${args.right_icon}</template>
    </RxButton>
  `,
});

// Define the variations of the button component
export const DefaultButton = Template.bind({});
DefaultButton.args = {
  default: DEFAULT_SLOT,
};
