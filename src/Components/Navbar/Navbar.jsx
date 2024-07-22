import './Navbar.css'

export default function Navbar({onClick, turns, wins}) {
  return (
    <>
      {/* <h3>MEMORY</h3> */}
      <header>
      <nav>
        <div className='data'>
          <p>Turns: {turns}</p>
          <p>Wins: {wins}</p>
        </div>
        <button className='button' onClick={onClick}>New Game</button>
      </nav>
    </header>
    </>
    
  )
}
