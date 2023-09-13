import './index.css'

const EachCountry = props => {
  const {eachCountry} = props
  const {name, isVisited} = eachCountry
  const className = isVisited ? 'normal' : 'btn'

  return (
    <>
      <li className="wrap-country">
        <p className="scroll-name">{name}</p>
        <button type="button" className={className}>
          {isVisited ? 'Visited' : 'Visit'}
        </button>
      </li>
    </>
  )
}
export default EachCountry
