import './EntertainmentCard.css'

function EntertainmentCard({ icon, title, description, count, className, backgroundImage }) {
  return (
    <div className={`entertainment-card${className ? ' ' + className : ''}`}>
      {backgroundImage && (
        <div className="entertainment-card-bg">
          <img src={backgroundImage} alt="" loading="lazy" />
        </div>
      )}
      <div className="entertainment-card-beam"></div>
      <div className="entertainment-card-accent entertainment-card-accent--tl"></div>
      <div className="entertainment-card-accent entertainment-card-accent--br"></div>
      <div className="entertainment-icon">
        {icon}
      </div>
      <div className="entertainment-content">
        {count && <span className="entertainment-count">{count}x vorhanden</span>}
        <h3 className="entertainment-title">{title}</h3>
        <p className="entertainment-description">{description}</p>
      </div>
    </div>
  )
}

export default EntertainmentCard
