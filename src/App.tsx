import Card from "./components/Card";
import { useState } from "react";
// import { useState } from 'react';
import "./App.css";

const tutorialData = [
  {
    id: 1,
    h2: "Dedica muchas horas",
    color: "#ddd",
    img: "./src/assets/img/mujer.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel efficitur felis, et ultricies neque. Sed sed libero eget velit ultricies faucibus. Nullam tincidunt, nunc vel viverra scelerisque, ipsum mauris bibendum ex, et consequat ex velit vel velit.",
  },

  {
    id: 2,
    h2: "Programa proyectos propios",
    color: "#cccccc",
    img: "./src/assets/img/hombre.jpg",
    text: "Proin vel efficitur felis, et ultricies neque. Sed sed libero eget velit ultricies faucibus. Nullam tincidunt, nunc vel viverra scelerisque, ipsum mauris bibendum ex, et consequat ex velit vel velit.",
  },

  {
    id: 3,
    h2: "Procura descansar",
    color: "#aaaaaa",
    img: "./src/assets/img/niño.jpg",
    text: "Sed sed libero eget velit ultricies faucibus. Nullam tincidunt, nunc vel viverra scelerisque, ipsum mauris bibendum ex, et consequat ex velit vel velit.",
  },
];

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === tutorialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevius = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? tutorialData.length - 1 : prevIndex - 1
    );
  };

  console.log(currentCardIndex);

  return (
    <>
      <div>
        <Card
          h2={tutorialData[currentCardIndex].h2}
          color={tutorialData[currentCardIndex].color}
          img={tutorialData[currentCardIndex].img}
          text={tutorialData[currentCardIndex].text}
          key={tutorialData[currentCardIndex].id}
          handlePrevius= {handlePrevius}
          handleNext={handleNext}
        />
      </div>
    </>
  );
}

export default App;
