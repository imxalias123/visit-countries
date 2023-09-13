import './index.css'

const EachCountry = props => {
  const {eachCountry, addCountryCard} = props
  const {name, id, isVisited} = eachCountry
  const className = isVisited ? 'normal' : 'btn'

  const addCard = () => {
    addCountryCard(id)
  }

  return (
    <>
      <li className="wrap-country">
        <p className="scroll-name">{name}</p>
        <button type="button" className={className} onClick={addCard}>
          {isVisited ? 'Visited' : 'Visit'}
        </button>
      </li>
    </>
  )
}
export default EachCountry
