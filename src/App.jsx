import { useState } from 'react'
import Response from './Response'
import './App.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginAppBar from './LoginAppBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GoogleOAuthProvider clientId='235254569809-35hid0nqgp3rbpsitqnnlor6emfrr5lc.apps.googleusercontent.com'>
        <LoginAppBar />
        <Response />
      </GoogleOAuthProvider>
    </>
  )
}

export default App
