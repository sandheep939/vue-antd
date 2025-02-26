import type { Meta, StoryFn } from "@storybook/vue3";
import { fn } from "@storybook/test";
import RxButton, { type ButtonProps } from "@/components/rx-button.vue";

interface ButtonPropsWithSlot extends ButtonProps {
  default: string;
  left_icon: string;
  right_icon: string;
}

const DEFAULT_SLOT = "Click Me";

export default {
  title: "Components/RxButton",
  component: RxButton,
  tags: ["autodocs"],
  args: {
    onClick: fn(),
    default: DEFAULT_SLOT,
  },
  argTypes: {
    class: {
      control: "text",
      description: "Additional custom classes",
    },
    left_icon: {
      control: "text",
      description: "Left icon for the button",
    },
    right_icon: {
      control: "text",
      description: "Right icon for the button",
    },
    default: {
      control: "text",
      description: "Button text or label",
    },
  },
} as Meta;

const Template: StoryFn<ButtonPropsWithSlot> = (args) => ({
  components: { RxButton },
  setup() {
    return { args };
  },
  template: `
    <RxButton v-bind="args">
      <template #left_icon>{{args.left_icon}}</template>
      <template #default>{{args.default}}</template>
      <template #right_icon>{{args.right_icon}}</template>
    </RxButton>
  `,
});

export const DefaultButton = Template.bind({});
DefaultButton.args = {};
