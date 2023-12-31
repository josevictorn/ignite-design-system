import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@jos-ignite-ui/react'

export default {
  title: 'Surface/Box',
  component: Box,

  args: {
    children: (
      <>
        <Text>Testando o elemento Box</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primaty: StoryObj<BoxProps> = {}
