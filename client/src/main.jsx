import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/react'


const publishable_Key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if(!publishable_Key){
  throw new Error('Missing VITE_CLERK_PUBLISHABLE_KEY environment variable. Please set it in client environment file (.env) or in your deployment environment.')
}

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={publishable_Key} afterSignInUrl='/dashboard' afterSignOutUrl='/login'>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ClerkProvider>
  ,
)
