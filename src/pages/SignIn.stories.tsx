import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { rest } from 'msw'
import { SignIn } from './SignIn'

export default {
  title: 'Pages/Sign in',
  component: SignIn,
  args: { children: 'Log in' },
  argTypes: {
    asChild: { table: { disable: true } },
  },
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({ message: 'Login succeeded!' }))
        }),
      ],
    },
  },
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('Insert your email'), 'joaojesus@email.dev')
    userEvent.type(canvas.getByPlaceholderText('************'), '12345678')

    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => expect(canvas.getByText('Logged in!')).toBeInTheDocument())
  },
}
