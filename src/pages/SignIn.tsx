import { Checkbox } from '@radix-ui/react-checkbox'
import { Envelope, Lock } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import axios from 'axios'
import { Button } from '../components/Button'
import { Heading } from '../components/Heading'
import { Text } from '../components/Text'
import { TextInput } from '../components/TextInput'
import { Logo } from '../Logo'

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  async function handleSignIn(event: FormEvent) {
    event.preventDefault()

    await axios.post('/sessions', { email: 'joaojesus@email.dev', password: '12345678' })

    setIsUserSignedIn(true)
  }

  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
      <header className='flex flex-col items-center'>
        <Logo />
        <Heading className='mt-4' size='lg'>
          Ignite Lab
        </Heading>
        <Text className='text-gray-400 mt-1' size='lg'>
          Login to start using
        </Text>
      </header>

      <form
        onSubmit={handleSignIn}
        className='flex flex-col items-stretch w-full max-w-[400px] mt-10 gap-4'
      >
        {isUserSignedIn && <Text>Logged in!</Text>}
        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Email address</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input id='email' type='email' placeholder='Insert your email' />
          </TextInput.Root>
        </label>
        <label htmlFor='password' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Password</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input id='password' type='password' placeholder='************' />
          </TextInput.Root>
        </label>
        <label htmlFor='remember' className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Text size='sm' className='text-gray-200'>
            Remember me for 30 days
          </Text>
        </label>
        <Button type='submit' className='mt-4'>
          Login
        </Button>
      </form>

      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text size='sm' asChild>
          <a href='' className='text-gray-400 underline hover:text-gray-200'>
            Forgot password?
          </a>
        </Text>
        <Text size='sm' asChild>
          <a href='' className='text-gray-400 underline hover:text-gray-200'>
            Don’t have an account? Sign up
          </a>
        </Text>
      </footer>
    </div>
  )
}
