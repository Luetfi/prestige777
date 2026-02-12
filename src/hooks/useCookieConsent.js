import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'prestige777_cookie_consent'

const defaultConsent = {
  necessary: true,
  external_media: false,
}

export function useCookieConsent() {
  const [consent, setConsent] = useState(null) // null = not yet decided
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        setConsent(JSON.parse(stored))
        setShowBanner(false)
      } else {
        setShowBanner(true)
      }
    } catch {
      setShowBanner(true)
    }
  }, [])

  const saveConsent = useCallback((newConsent) => {
    const merged = { ...defaultConsent, ...newConsent, necessary: true }
    setConsent(merged)
    setShowBanner(false)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged))
    } catch {
      // silent
    }
  }, [])

  const acceptAll = useCallback(() => {
    saveConsent({ necessary: true, external_media: true })
  }, [saveConsent])

  const acceptNecessary = useCallback(() => {
    saveConsent({ necessary: true, external_media: false })
  }, [saveConsent])

  const openSettings = useCallback(() => {
    setShowBanner(true)
  }, [])

  const hasConsent = useCallback(
    (category) => consent?.[category] ?? false,
    [consent]
  )

  return {
    consent,
    showBanner,
    acceptAll,
    acceptNecessary,
    saveConsent,
    openSettings,
    hasConsent,
  }
}
