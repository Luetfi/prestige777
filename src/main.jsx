import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { CookieConsentProvider } from './hooks/CookieConsentContext'
import App from './App'
import './index.css'
import './styles/scroll-reveal.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <CookieConsentProvider>
          <App />
        </CookieConsentProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)
