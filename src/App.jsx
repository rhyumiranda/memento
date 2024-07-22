import PWABadge from './PWABadge.jsx'
import { useEffect, useState } from 'react'
import Card from './Components/Card.jsx'
import shuffle from './utilities/shuffle.js'
import './index.css'

function App() {
  const [cards, setCards] = useState(shuffle);
  const [flipped, setFlipped] = useState([]);

  function handleClick(index) {
    setFlipped([...flipped, index])
  }

  
  return (
    <>
      <h2>Memento 🃏</h2>
      <div className='grid'>
          {cards.map((card, index) => {
            const {image, id} = card;
            return <Card key={id} image={image} selected={flipped.includes(index)} onClick={() => handleClick(index)}/>
          })}
      </div>
      <PWABadge />
    </>
  )
}

export default App
