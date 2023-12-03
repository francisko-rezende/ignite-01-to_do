import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { PlusCircle } from "lucide-react";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const CreateTask: Story = {
  args: {
    children: (
      <>
        Create <PlusCircle size={16} />
      </>
    ),
  },
};
