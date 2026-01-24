import './MenuItem.css'

function MenuItem({ name, description, price, tag }) {
  return (
    <div className="menu-item">
      <div className="menu-item-header">
        <h3 className="menu-item-name">{name}</h3>
        {tag && <span className="menu-item-tag">{tag}</span>}
      </div>
      {description && (
        <p className="menu-item-description">{description}</p>
      )}
      <div className="menu-item-price">{price}</div>
    </div>
  )
}

export default MenuItem
