import './index.css'

const EachBroweser = props => {
  const {eachBrowseText, onDelete} = props

  const {id, timeAccessed, logoUrl, title, domainUrl} = eachBrowseText

  const onDeleteButton = () => {
    onDelete(id)
  }

  return (
    <div className="browser-container">
      <p className="time-accessed">{timeAccessed}</p>
      <img className="logo" src={logoUrl} alt={title} />
      <h1 className="title">{title}</h1>
      <p className="domain-url  ">{domainUrl}</p>
      <div className="button">
        <button type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete icon"
            className="button-img"
            onClick={onDeleteButton}
          />
        </button>
      </div>
    </div>
  )
}

export default EachBroweser
