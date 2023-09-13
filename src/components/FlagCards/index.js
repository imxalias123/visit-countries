import './index.css'

const FlagCards = props => {
  const {eachCountry} = props
  const {imageUrl, name, isVisited} = eachCountry

  return (
    <li className="wrap-countries">
      <img src={imageUrl} alt={name} className="country-img" />
      <div className="wrap-bottom">
        <p className="country-name">{name}</p>
        <button type="button" className="remove-btn">
          Remove
        </button>
      </div>
    </li>
  )
}

export default FlagCards
