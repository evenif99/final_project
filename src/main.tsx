import React from 'react'
import ReactDOM from 'react-dom/client'
import "./i18n"
import './index.css'
import 'tw-animate-css'
import router from '@/components/router'

import { ThemeProvider } from '@/components/theme-provider'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="lingo-theme">
      {/* 라우팅 */}
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  </React.StrictMode>,
)
