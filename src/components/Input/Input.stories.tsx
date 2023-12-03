import { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { label: "Input" } };

export const CreateTask: Story = {
  args: { label: "Input", placeholder: "Add a new task" },
};
