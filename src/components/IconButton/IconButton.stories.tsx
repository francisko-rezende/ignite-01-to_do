import { Meta, StoryObj } from "@storybook/react";
import { IconButton } from ".";

const meta = {
  title: "IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DeleteTask: Story = {};
