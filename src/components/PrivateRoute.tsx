import { useUser } from '@clerk/clerk-react'
import { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LoadingPage from './LoadingPage';

export default function PrivateRoute({ children }: { children: ReactNode }) {
  const { isSignedIn, isLoaded } = useUser()

  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn === false)
      navigate("/sign-in", { replace: true })
  }, [isSignedIn])

  if (!isLoaded) {
    return <LoadingPage />
  }

  return children;
}

