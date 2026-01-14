import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'tw-animate-css'

import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <App />
      <Toaster />
    </ThemeProvider>
  </React.StrictMode>,
)
