import { Helmet } from 'react-helmet-async'

const defaults = {
  siteName: 'Prestige 777',
  siteUrl: 'https://www.prestige777.de',
  defaultDescription: 'Prestige 777 – Deine Premium Shisha Bar in Remseck am Neckar bei Ludwigsburg. Shisha, Cocktails, Spielautomaten, Live Sport & Events. 7 Tage geöffnet.',
}

function SEO({ title, description, path = '/', noindex = false }) {
  const fullTitle = title
    ? `${title} | ${defaults.siteName}`
    : `${defaults.siteName} | Shisha Bar in Remseck bei Ludwigsburg`
  const desc = description || defaults.defaultDescription
  const url = `${defaults.siteUrl}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
    </Helmet>
  )
}

export default SEO
