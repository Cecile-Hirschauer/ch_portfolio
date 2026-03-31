import type { Preview } from "@storybook/react";
import "@cecile/tokens/tokens.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "portfolio",
      values: [
        { name: "portfolio", value: "#F5F0E8" },
        { name: "surface", value: "#FFF8DC" },
        { name: "dark", value: "#1A1A1A" },
      ],
    },
  },
};

export default preview;
