import PWABadge from "./PWABadge.jsx";
import { useEffect, useState } from "react";
import Card from "./Components/Card.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import shuffle from "./utilities/shuffle.js";
import "./index.css";

function App() {
  const [cards, setCards] = useState(shuffle);
  const [turns, setTurns] = useState(0);
  const [wins, setWins] = useState(0);
  const [delay, setDelay] = useState(false);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);

  useEffect(() => {
    if(firstChoice && secondChoice){
      if(firstChoice.image === secondChoice.image){
        setCards(( prevCards ) => {
          return prevCards.map(( card ) => {
            if(card.image !== firstChoice.image){
              return card;
            }
            resetTurn();
            return {...card, matched: true};
          })
        })
      } else{
        setDelay(true);
        const timer = setTimeout(() => {
          resetTurn();
          console.log("3 seconds done");
        }, 2000)
      }
    }
    
  }, [firstChoice, secondChoice])

  useEffect(() => {
    const checkMatch = cards.filter(( card ) => !card.matched);

    if( cards.length && checkMatch.length < 1 ){
      const timer = setTimeout(() => {
        setCards((prevState) => {
          return prevState.map(( card ) => {
            return {...card, matched: false};
          })
        });
        setWins(wins + 1);
        resetTurn();
        setTurns(0);
        setCards(shuffle);
      },1000)
    }

  }, [cards, wins])

  const handleClick = (card) => {
    if(!delay){
      !firstChoice ? setFirstChoice(card) : setSecondChoice(card) ;
      setTurns((prevState) => prevState + 1);
    }
  }

  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setDelay(false);
  }

  const newGame = () => {
    const timer = setTimeout(() => {
      setCards((prevState) => {
        return prevState.map(( card ) => {
          return {...card, matched: false};
        })
      });
      resetTurn();
      setTurns(0);
      setWins(0)
      setCards(shuffle);
    }, 1000)
  }

  return (
    <>
      <Navbar onClick={newGame} turns={turns} wins={wins}/>
      <main className="grid">
        {cards.map((card) => {
          const { image, id, matched } = card;
          return (
            <Card
              key={id}
              image={image}
              selected={card === firstChoice || card === secondChoice || matched}
              onClick={() => handleClick(card)}
            />
          );
        })}
      </main>
      <PWABadge />
    </>
  );
}

export default App;
