import { createContext, useContext } from 'react'
import { useCookieConsent } from './useCookieConsent'

const CookieConsentContext = createContext(null)

export function CookieConsentProvider({ children }) {
  const cookieConsent = useCookieConsent()

  return (
    <CookieConsentContext.Provider value={cookieConsent}>
      {children}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsentContext() {
  const context = useContext(CookieConsentContext)
  if (!context) {
    throw new Error('useCookieConsentContext must be used within CookieConsentProvider')
  }
  return context
}
