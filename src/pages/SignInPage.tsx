import { SignIn } from '@clerk/clerk-react'

export default function SignInPage() {
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <SignIn routing='path' path='/sign-in' />
    </div>
  )
}

