import { Meta, StoryObj } from '@storybook/react'
import { SrOnly } from '.'

const meta = {
  title: 'SrOnly',
  component: SrOnly,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SrOnly>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
