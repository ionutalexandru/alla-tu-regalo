import { useState } from "react";

import Board from "./Board";
import Banker from "./Banker";
import FirstStage from "./FirstStage";
import LastStage from "./LastStage";

const Game = ({ initBoxes = [] }) => {
  const [boxes, setBoxes] = useState(initBoxes);
  const [playerBox, setPlayerBox] = useState(null);
  const [round, setRound] = useState(0);
  const [isRinging, setIsRinging] = useState(false);
  const [isFirstStage, setFirstStage] = useState(true);
  const [isLastStage, setLastStage] = useState(false);
  const [showPrize, setShowPrize] = useState(false);

  const maxRounds = boxes.length - 2;

  const incrementRound = () => {
    let newRound = round + 1;
    console.log({ newRound, maxRounds });
    if (newRound >= maxRounds) {
      newRound = maxRounds;
    }
    setRound(newRound);
    if (newRound === maxRounds) {
      setLastStage(true);
    } else if (newRound % 2 === 0) {
      setIsRinging(true);
    } else {
      setIsRinging(false);
    }
  };

  const handleBoxClick = (key) => {
    const newBoxes = [...boxes];
    const index = boxes.findIndex(({ key: _key }) => _key === key);
    newBoxes[index].isOpened = true;
    setBoxes(newBoxes);
    incrementRound();
  };

  const availableBoxes = boxes.filter(
    ({ isOpened, key }) => !isOpened && key !== playerBox
  );

  const closedBoxes = boxes.filter(({ isOpened }) => !isOpened);

  const renderBanker = () => {
    if (isFirstStage) {
      return (
        <FirstStage
          boxes={availableBoxes}
          onClickBox={(box) => {
            setPlayerBox(box);
            setFirstStage(false);
          }}
        />
      );
    } else if (isLastStage) {
      return (
        <LastStage
          boxes={closedBoxes}
          onClickBox={(box) => {
            setPlayerBox(box);
            setLastStage(false);
            setShowPrize(true);
            availableBoxes.forEach(({ key }) => handleBoxClick(key));
          }}
        />
      );
    } else {
      return (
        <Banker
          isRinging={isRinging}
          setIsRinging={setIsRinging}
          boxes={availableBoxes}
          onClickBox={(box) => setPlayerBox(box)}
        />
      );
    }
  };

  return (
    <>
      <Board
        allBoxes={initBoxes}
        boxes={boxes.filter(({ key }) => key !== playerBox)}
        handleBoxClick={handleBoxClick}
        playerBox={playerBox}
        showPrize={showPrize}
      />
      {renderBanker()}
    </>
  );
};

export default Game;
