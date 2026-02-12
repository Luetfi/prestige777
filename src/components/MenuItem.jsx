import './MenuItem.css'

function MenuItem({ name, description, price, tag, className }) {
  return (
    <div className={`menu-item${tag ? ' menu-item--premium' : ''}${className ? ' ' + className : ''}`}>
      <div className="menu-item-info">
        <h3 className="menu-item-name">
          {name}
          {tag && <span className="menu-item-tag">{tag}</span>}
        </h3>
        {description && <p className="menu-item-description">{description}</p>}
      </div>
      <span className="menu-item-dots" aria-hidden="true"></span>
      <div className="menu-item-price">{price}</div>
    </div>
  )
}

export default MenuItem
