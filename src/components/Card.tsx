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

const Card = ({
  h2,
  img,
  key,
  text,
  color,
  handleNext,
  handlePrevius,
  currentCardIndex,
  
}: Props) => {
  const showBefore = currentCardIndex !== 1;
  const showAfter = currentCardIndex !== 3;
  let puntos = '';
  if (currentCardIndex === 1) {
    puntos = "- . . "; 
  } else if (currentCardIndex === 2) {
    puntos = ". - .";
  } else if (currentCardIndex === 3) {
    puntos = ". . -ñ";
  }
  return (
    <>
      <div
        className="card shadow-lg my-4 mx-auto"
        key={key}
        style={{
          maxWidth: "300px",
          width: "100%",
          background: color,
        }}
      >
        <img
          src={img}
          className="customImage"
          style={{ objectFit: "cover" }}
          alt="Card Image"
        />
        <div className="div-text">
          <h2>{h2}</h2>
          <p>{text}</p>
        </div>
        <div className="d-flex justify-content-between px-5 pb-3 botones">
          <div className="cardIndex">
            <p>
              {puntos}
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center gap-4">
            {showBefore && (
              <button className="borde {mostrar}" onClick={handlePrevius}>
                <i className="fa-solid fa-arrow-left"></i>
              </button>
            )}
            {showAfter && (
              <button className="borde" onClick={handleNext}>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
