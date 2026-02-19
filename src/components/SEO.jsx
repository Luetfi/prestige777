import { Helmet } from 'react-helmet-async'

const defaults = {
  siteName: 'Prestige 777',
  siteUrl: 'https://www.prestige777.de',
  defaultDescription: 'Prestige 777 – Deine Premium Shisha Bar & Lounge in Remseck am Neckar bei Ludwigsburg und Stuttgart. Shisha rauchen, Cocktails, Spielautomaten, Live Sport & Events. 7 Tage geöffnet.',
  defaultImage: 'https://www.prestige777.de/og-image.jpg',
  defaultKeywords: 'Shisha Bar, Shisha Bar Ludwigsburg, Shisha Bar Remseck, Shisha Bar Stuttgart, Shisha Lounge, Hookah Bar, Premium Shisha, Prestige 777',
}

function SEO({ title, description, path = '/', noindex = false, keywords, ogType = 'website' }) {
  const fullTitle = title
    ? `${title} | ${defaults.siteName}`
    : `${defaults.siteName} | Shisha Bar in Remseck bei Ludwigsburg & Stuttgart`
  const desc = description || defaults.defaultDescription
  const url = `${defaults.siteUrl}${path}`
  const kw = keywords || defaults.defaultKeywords

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={kw} />
      <link rel="canonical" href={url} />
      <link rel="alternate" hreflang="de" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:site_name" content={defaults.siteName} />
      <meta property="og:image" content={defaults.defaultImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={defaults.defaultImage} />
    </Helmet>
  )
}

export default SEO
