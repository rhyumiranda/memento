import "./Card.css";

function Card({ image, onClick, selected }) {
  return (
    <div className="card">
      <div className={selected && 'selected'}>
        <img src={image} className="front" alt="The front of a Card" />
        <img
          src="/images/Cards/Back.jpg"
          className="back"
          onClick={onClick}
          alt="The back of a Card"
        />
      </div>
    </div>
  );
}

export default Card;
