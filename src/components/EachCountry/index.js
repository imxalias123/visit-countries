import './index.css'

const EachCountry = props => {
  const {eachCountry, changeButton} = props
  const {name, id, isVisited} = eachCountry
  const className = isVisited ? 'normal' : 'btn'

  const addCard = () => {
    changeButton(id)
  }

  return (
    <>
      <li className="wrap-country">
        <p className="scroll-name">{name}</p>
        <button type="button" className={className} onClick={addCard}>
          <p>{isVisited ? 'Visited' : 'Visit'}</p>
        </button>
      </li>
    </>
  )
}
export default EachCountry
