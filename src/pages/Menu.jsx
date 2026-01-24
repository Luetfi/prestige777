import { useState } from 'react'
import MenuItem from '../components/MenuItem'
import './Menu.css'

const menuData = {
  shisha: [
    { id: 1, name: 'Premium Mix', description: 'Unsere hausgemachte Tabakmischung mit fruchtigen Noten', price: '18,00 €', tag: 'Bestseller' },
    { id: 2, name: 'Double Apple', description: 'Klassischer Doppelapfel - zeitloser Genuss', price: '16,00 €' },
    { id: 3, name: 'Blueberry Mint', description: 'Erfrischende Kombination aus Blaubeere und Minze', price: '16,00 €' },
    { id: 4, name: 'Watermelon Ice', description: 'Kühle Wassermelone mit Mentholfrische', price: '16,00 €', tag: 'Neu' },
    { id: 5, name: 'Mango Tango', description: 'Exotische Mango mit einem Hauch Zitrus', price: '16,00 €' },
    { id: 6, name: 'Grape Explosion', description: 'Intensive Traube mit süßem Nachgeschmack', price: '16,00 €' },
    { id: 7, name: 'Love 66', description: 'Die legendäre Wassermelonen-Minz-Kombination', price: '17,00 €', tag: 'Beliebt' },
    { id: 8, name: 'Prestige Special', description: 'Exklusive Hausmischung - Rezept geheim!', price: '20,00 €', tag: 'Premium' },
  ],
  drinks: [
    { id: 9, name: 'Softdrinks', description: 'Cola, Fanta, Sprite, Wasser (0,33l)', price: '3,50 €' },
    { id: 10, name: 'Eistee', description: 'Pfirsich oder Zitrone (0,5l)', price: '4,00 €' },
    { id: 11, name: 'Red Bull', description: 'Energy Drink (0,25l)', price: '4,50 €' },
    { id: 12, name: 'Türkischer Tee', description: 'Traditioneller schwarzer Tee im Glas', price: '3,00 €' },
    { id: 13, name: 'Arabischer Kaffee', description: 'Mit Kardamom verfeinert', price: '4,00 €' },
    { id: 14, name: 'Fresh Mint Lemonade', description: 'Hausgemachte Limonade mit frischer Minze', price: '5,00 €', tag: 'Empfehlung' },
    { id: 15, name: 'Mango Lassi', description: 'Cremiger Mango-Joghurt-Drink', price: '5,50 €' },
    { id: 16, name: 'Mocktail Selection', description: 'Verschiedene alkoholfreie Cocktails', price: '6,00 €' },
  ],
  snacks: [
    { id: 17, name: 'Nussmix', description: 'Geröstete Nüsse - gesalzen oder natur', price: '4,00 €' },
    { id: 18, name: 'Hummus & Fladenbrot', description: 'Cremiger Hummus mit frischem Brot', price: '6,50 €' },
    { id: 19, name: 'Baklava', description: 'Süßes Gebäck mit Pistazien und Honig', price: '5,00 €' },
    { id: 20, name: 'Oliven Mix', description: 'Marinierte Oliven verschiedener Sorten', price: '4,50 €' },
    { id: 21, name: 'Falafel Teller', description: 'Frische Falafel mit Tahinisauce', price: '8,00 €' },
    { id: 22, name: 'Käse-Börek', description: 'Knuspriges Blätterteiggebäck mit Käse', price: '6,00 €' },
  ],
}

const categories = [
  { id: 'all', label: 'Alle' },
  { id: 'shisha', label: 'Shisha' },
  { id: 'drinks', label: 'Getränke' },
  { id: 'snacks', label: 'Snacks' },
]

function Menu() {
  const [activeCategory, setActiveCategory] = useState('all')

  const getFilteredItems = () => {
    if (activeCategory === 'all') {
      return [
        ...menuData.shisha,
        ...menuData.drinks,
        ...menuData.snacks,
      ]
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
        return 'Unsere Karte'
    }
  }

  return (
    <div className="menu-page">
      <section className="menu-hero">
        <div className="container">
          <h1 className="menu-title">
            Unsere <span className="glow">Karte</span>
          </h1>
          <p className="menu-subtitle">
            Entdecke unsere Auswahl an Premium-Shishas, erfrischenden Getränken und leckeren Snacks
          </p>
        </div>
      </section>

      <section className="menu-content">
        <div className="container">
          <div className="menu-filter">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <h2 className="category-title">{getCategoryTitle()}</h2>

          <div className="menu-grid">
            {getFilteredItems().map((item) => (
              <MenuItem
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                tag={item.tag}
              />
            ))}
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
