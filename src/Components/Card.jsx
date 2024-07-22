import '../index.css'
import back from '/images/Cards/Back.jpg'

function Card({image, onClick, selected}) {
  return (
  <div className='card'>
      <img src={image} className='card-face'/>
  </div>
  )
}

export default Card
