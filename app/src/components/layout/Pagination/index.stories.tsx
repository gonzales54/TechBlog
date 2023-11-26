import Pagination from "./components/Pagination";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: "components/layout/Pagination",
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {},
};
