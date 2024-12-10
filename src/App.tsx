import Card from "./components/Card";
import Buton from "./components/Buton";
import useCardNavegation from "./hook/useCardNavegation";  
import "./App.css";

const tutorialData = [
  {
    id: 1,
    h2: "Dedica muchas horas",
    color: "#fff",
    img: "./src/assets/img/mujer.jpg",
    text: "Sed sed libero eget velit ultricies faucibus. Nullam tincidunt, nunc vel viverra scelerisque, ipsum mauris bibendum ex, et consequat ex.",
  },

  {
    id: 2,
    h2: "Proyectos propios",
    color: "#fff",
    img: "./src/assets/img/hombre.jpg",
    text: "Sed sed libero eget velit ultricies faucibus. Nullam tincidunt, nunc vel viverra scelerisque, ipsum mauris bibendum ex, et consequat ex.",
  },

  {
    id: 3,
    h2: "Procura descansar",
    color: "#fff",
    img: "./src/assets/img/niño.jpg",
    text: "Sed sed libero eget velit ultricies faucibus. Nullam tincidunt, nunc vel viverra scelerisque, ipsum mauris bibendum ex, et consequat ex.",
  },

  {
    id: 4,
    h2: "Dedica muchas horas",
    color: "#fff",
    img: "./src/assets/img/mujer.jpg",
    text: "Sed sed libero eget velit ultricies faucibus. Nullam tincidunt, nunc vel viverra scelerisque, ipsum mauris bibendum ex, et consequat ex.",
  },

  {
    id: 5,
    h2: "Proyectos propios",
    color: "#fff",
    img: "./src/assets/img/hombre.jpg",
    text: "Sed sed libero eget velit ultricies faucibus. Nullam tincidunt, nunc vel viverra scelerisque, ipsum mauris bibendum ex, et consequat ex.",
  },

  {
    id: 6,
    h2: "Procura descansar",
    color: "#fff",
    img: "./src/assets/img/niño.jpg",
    text: "Sed sed libero eget velit ultricies faucibus. Nullam tincidunt, nunc vel viverra scelerisque, ipsum mauris bibendum ex, et consequat ex.",
  },
];

function App() {
  // Usamos el hook para manejar la lógica de navegación
  const { currentCardIndex, handleNext, handlePrevious, handleClick } = useCardNavegation(tutorialData.length);

  return (
    <div className="slider">
      <div className="d-flex flex-row justify-content-center">
        {tutorialData.map((card, index) => (
          <div key={card.id} className="card-container">
            <Card
              card={card}
              handlePrevious={handlePrevious}
              handleNext={handleNext}
              currentCardIndex={currentCardIndex}
              totalCards={tutorialData.length}
              handleClick={handleClick}
              index={index}
            />
            {/* Solo renderizamos el botón para la tarjeta activa */}
            {currentCardIndex === index && (
              <Buton
                handlePrevious={handlePrevious}
                handleNext={handleNext}
                currentCardIndex={currentCardIndex}
                totalCards={tutorialData.length}
                handleClick={handleClick}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;