import { useState } from "react";

const useCardNavigation = (totalCards: number) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => 
      prevIndex === totalCards - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentCardIndex((prevIndex) => 
      prevIndex === 0 ? totalCards - 1 : prevIndex - 1
    );
  };

  const handleClick = (index: number) => {
    setCurrentCardIndex(index);
  };

  return {
    currentCardIndex,
    handleNext,
    handlePrevious,
    handleClick,
  };
};
export default useCardNavigation;