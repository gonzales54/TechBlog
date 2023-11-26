import Footer from "./components/Footer";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: "components/layout/Footer",
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {},
};
