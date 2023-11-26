import Layout from "./components/Layout";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Layout> = {
  component: Layout,
  title: "components/layout/Layout",
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  args: {},
};
