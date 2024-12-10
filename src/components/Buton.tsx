type ButtonProps = {
  handlePrevious: () => void;
  handleNext: () => void;
  handleClick: (index: number) => void;
  currentCardIndex: number;
  totalCards: number;
};

const Button = ({
  handlePrevious,
  handleNext,
  handleClick,
  currentCardIndex,
  totalCards,
}: ButtonProps) => {
  return (
    <div className="divButtons">
      <div className="d-flex flex-row gap-2">
        {/* Puntos de navegación */}
        {totalCards > 1 &&
          Array.from({ length: totalCards }).map((_, index) => (
            <div
              key={index}
              className={`point ${currentCardIndex === index ? "active" : ""}`}
              onClick={() => handleClick(index)}
            ></div>
          ))}
      </div>

      {/* Botones de navegación */}
      <div className="d-flex justify-content-center align-items-center gap-4">
        <button
          className="borde"
          id="prev"
          onClick={handlePrevious}
          disabled={currentCardIndex === 0}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button
          className="borde"
          id="next"
          onClick={handleNext}
          disabled={currentCardIndex === totalCards - 1}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Button;
