import { Meta, StoryObj } from '@storybook/react'
import { ToDo } from '.'

const meta = {
  title: 'ToDo',
  component: ToDo,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ToDo>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
