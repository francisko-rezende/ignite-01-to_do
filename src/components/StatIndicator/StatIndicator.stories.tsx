import { Meta, StoryObj } from "@storybook/react";
import { StatIndicator } from ".";

const meta = {
  title: "StatIndicator",
  component: StatIndicator,
  argTypes: {
    variation: {
      options: ["created", "finished"],
      control: { type: "select" },
    },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof StatIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CreatedTasks: Story = {
  args: { statistic: 0, variation: "created" },
};
export const FinishedTasks: Story = {
  args: { statistic: 0, variation: "finished" },
};
