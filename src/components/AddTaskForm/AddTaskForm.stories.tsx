import { Meta, StoryObj } from '@storybook/react'
import { AddTaskForm } from '.'

const meta = {
  title: 'AddTaskForm',
  component: AddTaskForm,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AddTaskForm>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
