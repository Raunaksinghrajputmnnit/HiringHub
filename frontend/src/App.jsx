
import './App.css'
import { SignInButton, SignedOut, UserButton } from '@clerk/clerk-react'

function App() {
  

  return (
    <>
      <h1>Welcome to app</h1>
      <SignInButton mode="model"/>
      <SignedOut>
      <SignInButton mode="modal">
       <button>Login</button>
      </SignInButton>
      </SignedOut>
      <SignInButton>
        <SignedOut/>
      </SignInButton>
      <UserButton/>
    </>
  )
}

export default App
