import { Meta, StoryObj } from "@storybook/react";
import { Task } from ".";

const meta = {
  title: "Task",
  component: Task,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Task>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isDone: false,
  },
};

export const Done: Story = {
  args: {
    children:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isDone: true,
  },
};
