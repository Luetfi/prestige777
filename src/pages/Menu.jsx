import { useState } from 'react'
import SEO from '../components/SEO'
import MenuItem from '../components/MenuItem'
import FloatingElements from '../components/FloatingElements'
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'
import './Menu.css'

const menuData = {
  shisha: [
    // Moderne Shishas
    { id: 1, name: 'Blackbox', description: '', price: '16,00 €', subcategory: 'modern' },
    { id: 2, name: 'Blaulicht', description: '', price: '16,00 €', subcategory: 'modern' },
    { id: 3, name: 'FFM', description: '', price: '16,00 €', subcategory: 'modern' },
    { id: 4, name: 'Hamburg', description: '', price: '16,00 €', subcategory: 'modern' },
    { id: 5, name: 'Love 66', description: '', price: '16,00 €', subcategory: 'modern' },
    { id: 6, name: 'Löwenherz', description: '', price: '16,00 €', subcategory: 'modern' },
    { id: 7, name: 'Nightkiller', description: '', price: '16,00 €', subcategory: 'modern' },
    { id: 8, name: 'Papa Luma', description: '', price: '16,00 €', subcategory: 'modern' },
    { id: 9, name: 'Raspborn', description: '', price: '16,00 €', subcategory: 'modern' },
    { id: 10, name: 'Sommer in Beirut', description: '', price: '16,00 €', subcategory: 'modern' },

    // Traditionelle Shishas
    { id: 11, name: 'Black Nana', description: '', price: '16,00 €', subcategory: 'traditionell' },
    { id: 12, name: 'Doppel Apfel', description: '', price: '16,00 €', subcategory: 'traditionell' },
    { id: 13, name: 'Falim', description: '', price: '16,00 €', subcategory: 'traditionell' },
    { id: 14, name: 'Falim Red', description: '', price: '16,00 €', subcategory: 'traditionell' },
    { id: 15, name: 'Orange-Minze', description: '', price: '16,00 €', subcategory: 'traditionell' },
    { id: 16, name: 'Persischer Apfel', description: '', price: '16,00 €', subcategory: 'traditionell' },
    { id: 17, name: 'Pistazie-Vanille', description: '', price: '16,00 €', subcategory: 'traditionell' },
    { id: 18, name: 'Traube-Minze', description: '', price: '16,00 €', subcategory: 'traditionell' },
  ],
  drinks: [
    // Softdrinks
    { id: 101, name: 'Wasser Black Forest Naturell', description: '0,25L', price: '2,90 €', subcategory: 'softdrinks' },
    { id: 102, name: 'Teinacher Wasser Medium', description: '0,2L', price: '2,90 €', subcategory: 'softdrinks' },
    { id: 103, name: 'Coca Cola', description: '0,2L', price: '3,20 €', subcategory: 'softdrinks' },
    { id: 104, name: 'Cola Zero', description: '0,2L', price: '3,20 €', subcategory: 'softdrinks' },
    { id: 105, name: 'Fanta', description: '0,2L', price: '3,20 €', subcategory: 'softdrinks' },
    { id: 106, name: 'Sprite', description: '0,2L', price: '3,20 €', subcategory: 'softdrinks' },
    { id: 107, name: '28 Black', description: 'Schwarze Dose · 0,25L', price: '4,00 €', subcategory: 'softdrinks' },
    { id: 108, name: 'Bitterlemon', description: '0,2L', price: '3,20 €', subcategory: 'softdrinks' },
    { id: 109, name: 'Coca Cola Groß', description: '0,4L', price: '4,00 €', subcategory: 'softdrinks' },
    { id: 110, name: 'Fanta Groß', description: '0,4L', price: '4,00 €', subcategory: 'softdrinks' },
    { id: 111, name: 'Sprite Groß', description: '0,4L', price: '4,00 €', subcategory: 'softdrinks' },
    { id: 112, name: 'Elephant Bay Eistee', description: 'Verschiedene Sorten · 0,33L', price: '4,00 €', subcategory: 'softdrinks' },
    { id: 113, name: 'Elephant Bay Limonade', description: 'Verschiedene Sorten · 0,33L', price: '4,00 €', subcategory: 'softdrinks' },
    { id: 114, name: 'Kiba', description: '0,4L', price: '4,00 €', subcategory: 'softdrinks' },
    { id: 115, name: 'Moloko', description: '0,25L', price: '4,00 €', subcategory: 'softdrinks' },
    { id: 116, name: 'Orangina', description: '0,25L', price: '3,20 €', subcategory: 'softdrinks' },
    { id: 117, name: 'Powerade', description: '0,5L', price: '4,50 €', subcategory: 'softdrinks' },
    { id: 118, name: 'Red Bull', description: 'Verschiedene Sorten · 0,25L', price: '4,00 €', subcategory: 'softdrinks' },
    { id: 119, name: 'Wasser Morelli', description: '0,75L', price: '5,00 €', subcategory: 'softdrinks' },

    // Selfmade Getränke
    { id: 201, name: 'Selfmade Eistee Himbeer-Minze', description: '0,4L', price: '5,90 €', subcategory: 'selfmade' },
    { id: 202, name: 'Selfmade Eistee Zitrone-Minze', description: '0,4L', price: '5,90 €', subcategory: 'selfmade' },
    { id: 203, name: 'Selfmade Limonade', description: '0,4L', price: '5,90 €', subcategory: 'selfmade' },

    // Alkoholfreie Cocktails
    { id: 301, name: 'Blueberry-Lime Mojito', description: '0,4L', price: '5,90 €', subcategory: 'alkoholfrei_cocktails' },
    { id: 302, name: 'Ipanema', description: '0,4L', price: '5,90 €', subcategory: 'alkoholfrei_cocktails' },
    { id: 303, name: 'Raspberry Virgin Mojito', description: '0,4L', price: '5,90 €', subcategory: 'alkoholfrei_cocktails' },
    { id: 304, name: 'Strawberry Mojito', description: '0,4L', price: '5,90 €', subcategory: 'alkoholfrei_cocktails' },

    // Alkoholische Getränke
    { id: 401, name: 'Aperol Spritz', description: '0,3L', price: '5,00 €', subcategory: 'alkoholisch' },
    { id: 402, name: 'Bier (Stuttgarter Hofbräu)', description: '0,33L', price: '4,00 €', subcategory: 'alkoholisch' },
    { id: 403, name: 'Desperados', description: '0,3L', price: '4,00 €', subcategory: 'alkoholisch' },
    { id: 404, name: 'Jacky + Softgetränk', description: '0,4L', price: '6,00 €', subcategory: 'alkoholisch' },
    { id: 405, name: 'Lillet Rosé White Peach', description: '0,3L', price: '5,90 €', subcategory: 'alkoholisch' },
    { id: 406, name: 'Lillet Wildberry', description: '0,3L', price: '5,90 €', subcategory: 'alkoholisch' },
    { id: 407, name: 'Radler', description: '0,33L', price: '4,00 €', subcategory: 'alkoholisch' },
    { id: 408, name: 'Sekt (Asti)', description: '', price: '4,00 €', subcategory: 'alkoholisch' },
    { id: 409, name: 'Shot', description: '0,2L', price: '2,50 €', subcategory: 'alkoholisch' },
    { id: 410, name: 'Wein', description: '0,2L', price: '5,50 €', subcategory: 'alkoholisch' },
    { id: 411, name: 'Wodka + Softgetränk', description: '0,4L', price: '6,00 €', subcategory: 'alkoholisch' },

    // Alkoholische Cocktails
    { id: 501, name: 'Caipirinha', description: '0,4L', price: '6,90 €', subcategory: 'alkoholisch_cocktails' },
    { id: 502, name: 'Ocean Dream', description: '0,4L', price: '6,90 €', subcategory: 'alkoholisch_cocktails' },
    { id: 503, name: 'Moscow Mule', description: '0,4L', price: '6,90 €', subcategory: 'alkoholisch_cocktails' },
    { id: 504, name: 'Almond Piña Colada', description: '0,4L', price: '6,90 €', subcategory: 'alkoholisch_cocktails' },
    { id: 505, name: 'Aperol Sour', description: '0,4L', price: '6,90 €', subcategory: 'alkoholisch_cocktails' },
    { id: 506, name: 'Gin Fizz', description: '0,4L', price: '6,90 €', subcategory: 'alkoholisch_cocktails' },
    { id: 507, name: 'Tropical Sunset', description: '0,4L', price: '6,90 €', subcategory: 'alkoholisch_cocktails' },
    { id: 508, name: 'Pornostar Martini', description: '0,2L', price: '6,90 €', subcategory: 'alkoholisch_cocktails' },
    { id: 509, name: 'Pink Star Martini', description: '0,2L', price: '6,90 €', subcategory: 'alkoholisch_cocktails' },
    { id: 510, name: 'Baileys Dream', description: '0,2L', price: '6,90 €', subcategory: 'alkoholisch_cocktails' },
    { id: 511, name: 'Chocolate Hazelnut Martini', description: '0,4L', price: '6,90 €', subcategory: 'alkoholisch_cocktails' },

    // Warme Getränke
    { id: 601, name: 'Café Crema', description: '0,2L', price: '2,90 €', subcategory: 'warm' },
    { id: 602, name: 'Cappuccino', description: '0,2L', price: '3,50 €', subcategory: 'warm' },
    { id: 603, name: 'Espresso', description: '25ml', price: '2,50 €', subcategory: 'warm' },
    { id: 604, name: 'Latte Macchiato', description: '0,3L', price: '3,90 €', subcategory: 'warm' },
    { id: 605, name: 'Tee', description: 'Verschiedene Sorten · 0,15L', price: '2,90 €', subcategory: 'warm' },
    { id: 606, name: 'Türkischer Çay', description: '0,125L', price: '2,50 €', subcategory: 'warm' },
    { id: 607, name: 'Warme Schokolade', description: '0,4L', price: '3,90 €', subcategory: 'warm' },

    // Kalter Kaffee & Milchshakes
    { id: 701, name: 'Eiskaffee', description: '0,4L', price: '4,90 €', subcategory: 'kalt_kaffee' },
    { id: 702, name: 'Café Frappé', description: '0,4L', price: '4,90 €', subcategory: 'kalt_kaffee' },
    { id: 703, name: 'Freddo Espresso', description: '0,4L', price: '4,90 €', subcategory: 'kalt_kaffee' },
    { id: 704, name: 'Freddo Cappuccino', description: '0,4L', price: '4,90 €', subcategory: 'kalt_kaffee' },
    { id: 705, name: 'Oreo Milchshake', description: '0,4L', price: '5,50 €', subcategory: 'kalt_kaffee' },
    { id: 706, name: 'Erdbeer Milchshake', description: '0,4L', price: '5,50 €', subcategory: 'kalt_kaffee' },
    { id: 707, name: 'Vanille Milchshake', description: '0,4L', price: '5,50 €', subcategory: 'kalt_kaffee' },

    // Alkoholische Flaschen
    { id: 801, name: 'Absolut Wodka + Softgetränk', description: '0,7L', price: '65,00 €', subcategory: 'flaschen' },
    { id: 802, name: 'Belvedere + Softgetränk', description: '', price: '90,00 €', subcategory: 'flaschen' },
    { id: 803, name: 'Jacky + Softgetränk', description: '0,7L', price: '65,00 €', subcategory: 'flaschen' },
    { id: 804, name: 'Jägermeister + Softgetränk', description: '0,7L', price: '50,00 €', subcategory: 'flaschen' },
    { id: 805, name: 'Moët & Chandon Champagner Ice', description: '0,75L', price: '99,00 €', subcategory: 'flaschen' },
  ],
  snacks: [
    { id: 901, name: 'Nachos mit Dip', description: '', price: '5,90 €' },
    { id: 902, name: 'Nuss-Mix', description: '', price: '3,50 €' },
    { id: 903, name: 'Gummibärchen Schale', description: '', price: '2,00 €' },
    { id: 904, name: 'Früchteplatte Groß', description: '', price: '17,00 €' },
    { id: 905, name: 'Früchteplatte Klein', description: '', price: '10,00 €' },
    { id: 906, name: 'Käse Baguette', description: '', price: '8,50 €' },
    { id: 907, name: 'Putenbrust Baguette', description: '', price: '8,50 €' },
    { id: 908, name: 'Sucuk Baguette', description: '', price: '8,50 €' },
  ],
}

const categories = [
  { id: 'all', label: 'Alle' },
  { id: 'shisha', label: 'Shisha' },
  { id: 'drinks', label: 'Getränke' },
  { id: 'snacks', label: 'Snacks' },
]

const drinkSubcategories = [
  { id: 'all', label: 'Alle Getränke' },
  { id: 'softdrinks', label: 'Softdrinks' },
  { id: 'selfmade', label: 'Selfmade' },
  { id: 'alkoholfrei_cocktails', label: 'Alkoholfreie Cocktails' },
  { id: 'alkoholisch', label: 'Alkoholische Getränke' },
  { id: 'alkoholisch_cocktails', label: 'Alkoholische Cocktails' },
  { id: 'warm', label: 'Warme Getränke' },
  { id: 'kalt_kaffee', label: 'Kalter Kaffee & Shakes' },
  { id: 'flaschen', label: 'Flaschen' },
]

const shishaSubcategories = [
  { id: 'all', label: 'Alle Shishas' },
  { id: 'modern', label: 'Moderne Shishas' },
  { id: 'traditionell', label: 'Traditionelle Shishas' },
]

const subcategoryLabels = {
  modern: 'Moderne Shishas',
  traditionell: 'Traditionelle Shishas',
  softdrinks: 'Softdrinks',
  selfmade: 'Selfmade Getränke',
  alkoholfrei_cocktails: 'Alkoholfreie Cocktails',
  alkoholisch: 'Alkoholische Getränke',
  alkoholisch_cocktails: 'Alkoholische Cocktails',
  warm: 'Warme Getränke',
  kalt_kaffee: 'Kalter Kaffee & Shakes',
  flaschen: 'Flaschen',
}

function getCategoryIcon(id) {
  switch (id) {
    case 'all':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
          <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
      )
    case 'shisha':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2c0 1.5-2 2.5-2 4" />
          <path d="M14 2c0 1.5-2 2.5-2 4" />
          <path d="M8.5 6h7l-1 3h-5l-1-3z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <path d="M7 13h10s2 3 2 5.5S16 22 12 22s-7-1.5-7-3.5S7 13 7 13z" />
          <path d="M6 17h12" />
        </svg>
      )
    case 'drinks':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2h9l-1.5 18h-6L6 2z" />
          <line x1="5" y1="2" x2="16" y2="2" />
          <path d="M8 2L6 7" />
          <circle cx="18.5" cy="5" r="3" />
          <line x1="18.5" y1="2" x2="18.5" y2="8" />
          <line x1="15.5" y1="5" x2="21.5" y2="5" />
        </svg>
      )
    case 'snacks':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21l6-15 6 15H3z" />
          <path d="M9 21l6-15 6 15H9z" />
        </svg>
      )
    default:
      return null
  }
}

function Menu() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeDrinkSub, setActiveDrinkSub] = useState('all')
  const [activeShishaSub, setActiveShishaSub] = useState('all')
  const heroRef = useScrollReveal()
  const filterRef = useScrollReveal({ threshold: 0 })
  const filterKey = `${activeCategory}-${activeDrinkSub}-${activeShishaSub}`
  const gridRef = useStaggerReveal({ staggerMs: 40, maxDelay: 500, threshold: 0, key: filterKey })

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId)
    setActiveDrinkSub('all')
    setActiveShishaSub('all')
  }

  const getFilteredItems = () => {
    if (activeCategory === 'all') {
      return [
        ...menuData.shisha,
        ...menuData.drinks,
        ...menuData.snacks,
      ]
    }
    if (activeCategory === 'shisha' && activeShishaSub !== 'all') {
      return menuData.shisha.filter((item) => item.subcategory === activeShishaSub)
    }
    if (activeCategory === 'drinks' && activeDrinkSub !== 'all') {
      return menuData.drinks.filter((item) => item.subcategory === activeDrinkSub)
    }
    return menuData[activeCategory] || []
  }

  const getCategoryTitle = () => {
    switch (activeCategory) {
      case 'shisha':
        return 'Shisha Auswahl'
      case 'drinks':
        return 'Getränke'
      case 'snacks':
        return 'Snacks & Speisen'
      default:
        return 'Unser Menü'
    }
  }

  const isGroupedView = () => {
    if (activeCategory === 'all') return false
    if (activeCategory === 'shisha' && activeShishaSub === 'all') return true
    if (activeCategory === 'drinks' && activeDrinkSub === 'all') return true
    return false
  }

  const getSubcategoryOrder = () => {
    if (activeCategory === 'shisha') {
      return shishaSubcategories.filter((s) => s.id !== 'all').map((s) => s.id)
    }
    if (activeCategory === 'drinks') {
      return drinkSubcategories.filter((s) => s.id !== 'all').map((s) => s.id)
    }
    return []
  }

  const renderMenuItems = () => {
    const items = getFilteredItems()

    if (isGroupedView()) {
      const order = getSubcategoryOrder()
      const grouped = {}
      for (const item of items) {
        const sub = item.subcategory || 'other'
        if (!grouped[sub]) grouped[sub] = []
        grouped[sub].push(item)
      }

      return order
        .filter((subId) => grouped[subId] && grouped[subId].length > 0)
        .map((subId) => (
          <div key={subId} className="menu-section-group scroll-reveal reveal-fade-up">
            <div className="menu-section-header">
              <h3>{subcategoryLabels[subId] || subId}</h3>
            </div>
            {grouped[subId].map((item) => (
              <MenuItem
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                tag={item.tag}
              />
            ))}
          </div>
        ))
    }

    return items.map((item) => (
      <MenuItem
        key={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
        tag={item.tag}
        className="scroll-reveal reveal-fade-up"
      />
    ))
  }

  return (
    <div className="menu-page">
      <SEO
        title="Menü – Shisha, Cocktails & Snacks"
        description="Entdecke die Speisekarte der Prestige 777 Shisha Bar in Remseck bei Ludwigsburg: Premium Shishas, Cocktails, Softdrinks, Kaffee und Snacks. Alle Preise auf einen Blick."
        path="/menu"
      />
      <section ref={heroRef} className="menu-hero scroll-reveal reveal-fade-in">
        <div className="container">
          <h1 className="menu-title">
            Unser <span className="glow">Menü</span>
          </h1>
          <p className="menu-subtitle">
            Entdecke unsere Auswahl an Premium-Shishas, erfrischenden Cocktails und leckeren Snacks in der Prestige 777 Shisha Bar
          </p>
        </div>
      </section>

      <section className="menu-content">
        <FloatingElements preset="drinks" />
        <div className="menu-content-bg">
          <div className="menu-content-orb menu-content-orb--1" />
          <div className="menu-content-orb menu-content-orb--2" />
          <div className="menu-content-grid" />
        </div>
        <div className="container">
          <div ref={filterRef} className="menu-filter scroll-reveal reveal-fade-up">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category.id)}
              >
                <span className="filter-icon">{getCategoryIcon(category.id)}</span>
                {category.label}
              </button>
            ))}
          </div>

          {activeCategory === 'shisha' && (
            <div className="menu-subfilter">
              {shishaSubcategories.map((sub) => (
                <button
                  key={sub.id}
                  className={`subfilter-btn ${activeShishaSub === sub.id ? 'active' : ''}`}
                  onClick={() => setActiveShishaSub(sub.id)}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          )}

          {activeCategory === 'drinks' && (
            <div className="menu-subfilter">
              {drinkSubcategories.map((sub) => (
                <button
                  key={sub.id}
                  className={`subfilter-btn ${activeDrinkSub === sub.id ? 'active' : ''}`}
                  onClick={() => setActiveDrinkSub(sub.id)}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          )}

          <h2 className="category-title">{getCategoryTitle()}</h2>

          <div ref={gridRef} key={filterKey} className="menu-grid">
            {renderMenuItems()}
          </div>

          <div className="menu-note">
            <p>
              * Alle Preise inkl. MwSt. Bei Fragen zu Allergenen oder Inhaltsstoffen
              wende dich bitte an unser Personal.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Menu
