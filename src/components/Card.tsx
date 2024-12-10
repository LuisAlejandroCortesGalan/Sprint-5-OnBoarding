import { useRef, useEffect, useCallback } from "react";

type CardProps = {
  card: {
    id: number;
    h2: string;
    color: string;
    img: string;
    text: string;
  };
  handlePrevious: () => void;
  handleNext: () => void;
  handleClick: (index: number) => void;
  currentCardIndex: number;
  totalCards: number;
  index: number;
};

const Card = ({
  card,
  currentCardIndex,
  totalCards,
  index
}: CardProps) => {
  // Referencias a las tarjetas
  const cardRefs = useRef<(HTMLDivElement | null)[]>(Array(totalCards).fill(null));

  // Función para aplicar los estilos de las tarjetas
  const loadShow = useCallback(() => {
    let stt = 0;
    const activo = currentCardIndex;

    // Tarjeta activa (centrada)
    if (cardRefs.current[activo]) {
      cardRefs.current[activo]!.style.setProperty("transform", "scale(1) translateX(0)");
      cardRefs.current[activo]!.style.setProperty("zIndex", "1");
      cardRefs.current[activo]!.style.setProperty("filter", "none");
      cardRefs.current[activo]!.style.setProperty("opacity", "1");
    }

    // Tarjetas a la derecha
    for (let i = activo + 1; i < totalCards; i++) {
      stt++;
      if (cardRefs.current[i]) {
        cardRefs.current[i]!.style.setProperty(
          "transform",
          `translateX(${220 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`
        );
        cardRefs.current[i]!.style.setProperty("zIndex", `${-stt}`);
        cardRefs.current[i]!.style.setProperty("filter", "blur(5px)");
        cardRefs.current[i]!.style.setProperty("opacity", stt > 2 ? "0" : "0.6");
      }
    }

    // Tarjetas a la izquierda
    stt = 0;
    for (let i = activo - 1; i >= 0; i--) {
      stt++;
      if (cardRefs.current[i]) {
        cardRefs.current[i]!.style.setProperty(
          "transform",
          `translateX(${-220 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`
        );
        cardRefs.current[i]!.style.setProperty("zIndex", `${stt}`);
        cardRefs.current[i]!.style.setProperty("filter", "blur(5px)");
        cardRefs.current[i]!.style.setProperty("opacity", stt > 2 ? "0" : "0.6");
      }
    }
  }, [currentCardIndex, totalCards]);

  useEffect(() => {
    loadShow(); // Llama a la función cuando cambia el índice actual
  }, [currentCardIndex, loadShow]);

  return (
    <div>
      <div
        className={`card ${currentCardIndex === index ? "cristal" : ""}`}
        style={{ background: card.color }}
        ref={(el) => (cardRefs.current[index] = el)} // Asigna la referencia
      >
        <img src={card.img} alt={card.h2} />
        <div className="cardText">
        <h2>{card.h2}</h2>
        <p>{card.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;