import type { Preview } from "@storybook/vue3";
import { withThemeByClassName } from "@storybook/addon-themes";
import "@/assets/styles/tailwind.css";

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      classTarget: "html",
      stylePreview: true,
    },
  },
};

export default preview;
