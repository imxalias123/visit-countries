import './index.css'

const FlagCards = props => {
  const {eachCountry, removeCard} = props
  const {id, imageUrl, name} = eachCountry

  const onDelete = () => {
    removeCard(id)
  }
  return (
    <li className="wrap-countries">
      <img src={imageUrl} alt={name} className="country-img" />
      <div className="wrap-bottom">
        <p className="country-name">{name}</p>
        <button type="button" className="remove-btn" onClick={onDelete}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default FlagCards
