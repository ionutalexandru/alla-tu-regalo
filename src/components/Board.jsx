import Box from "./Box";

const Board = ({ allBoxes, boxes, handleBoxClick, playerBox, showPrize }) => {
  const orderedBoxes = [...boxes].sort((a, b) => a.key - b.key);
  const halfIndex = Math.ceil(boxes.length / 2);

  const firstHalfBoxes = orderedBoxes.slice(0, halfIndex + 1);
  const secondHalfBoxes = orderedBoxes.slice(halfIndex, boxes.length);

  const box = allBoxes.find(({ key }) => key === playerBox);

  return (
    <div className="board">
      <div className="side-column left">
        <div>
          {firstHalfBoxes.map(({ key, isOpened, value }) => (
            <div
              key={`circle-${key}`}
              className={`Round${isOpened ? " Round-open" : ""}`}
            >
              <span>{isOpened ? value : ""}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="main-column">
        <div>
          <h1>
            <span className="gold">¡</span>Allá tú
            <span className="gold">!</span>
          </h1>
          {box && !showPrize ? (
            <>
              <div className="text-big">Tu caja es</div>
              <Box onClick={null} label={box.label} size="big white" />
            </>
          ) : box && showPrize ? (
            <div className="text-big">
              🎉
              <br />
              {box.value}
            </div>
          ) : null}
        </div>
      </div>
      <div className="side-column right">
        <div>
          {secondHalfBoxes.map(({ key, isOpened, value }) => (
            <div
              key={`circle-${key}`}
              className={`Round${isOpened ? " Round-open" : ""}`}
            >
              <span>{isOpened ? value : ""}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="boxes">
        <div>
          {boxes.map(({ key, label, isOpened }) => (
            <Box
              key={key}
              label={label}
              onClick={() => handleBoxClick(key)}
              isOpened={isOpened}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
