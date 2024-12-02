interface Props {
  h2: string;
  color: string;
  img: string;
  text: string;
  key: number;
  handleNext: () => void;
  handlePrevius: () => void;
  currentCardIndex: number;
  totalCards: number;

}

const Card = ({ h2, img, key, text, color, handleNext, handlePrevius, currentCardIndex, totalCards }: Props) => {
  return (
    <>
      <div
    
        className="card shadow-lg my-4 mx-auto"
        key= {key}
        style={{
          maxWidth: "300px", 
          width: "100%",
          background: color 
        }}
      >
        <img
          src={img}
          className="customImage"
          style={{ objectFit: "cover"}}
          alt="Card Image"
        />
        <div className="div-text">
          <h2>{h2}</h2>
          <p>
            {text}
          </p>
        </div>
        <div className="d-flex justify-content-between px-5 pb-3 botones">
        <div className="cardIndex">
          <p>Card nº: {currentCardIndex},<br /> de: {totalCards} Cards</p>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-4">
          <button className="borde" onClick={handlePrevius}>
          <i className="fa-solid fa-arrow-left"></i>
            
          </button>
          <button className="borde" onClick={handleNext}>
          <i className="fa-solid fa-arrow-right"></i>
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
