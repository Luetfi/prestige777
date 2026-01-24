import './EntertainmentCard.css'

function EntertainmentCard({ icon, title, description, count }) {
  return (
    <div className="entertainment-card">
      <div className="entertainment-icon">
        {icon}
      </div>
      <div className="entertainment-content">
        {count && <span className="entertainment-count">{count}x</span>}
        <h3 className="entertainment-title">{title}</h3>
        <p className="entertainment-description">{description}</p>
      </div>
    </div>
  )
}

export default EntertainmentCard
