import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './context/auth';
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
