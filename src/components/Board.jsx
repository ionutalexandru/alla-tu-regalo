import Box from "./Box";

const Board = ({ allBoxes, boxes, handleBoxClick, playerBox, showPrize }) => {
  const orderedBoxes = [...boxes].sort((a, b) => a.key - b.key);
  const halfIndex = Math.ceil(boxes.length / 2);

  const firstHalfBoxes = orderedBoxes.slice(0, halfIndex + 1);
  const secondHalfBoxes = orderedBoxes.slice(halfIndex, boxes.length);

  const box = allBoxes.find(({ key }) => key === playerBox);

  return (
    <div className="Board">
      <div className="Board-main">
        <div className="Side-column">
          {firstHalfBoxes.map(({ key, isOpened, value }) => (
            <div
              key={`circle-${key}`}
              className={`Round${isOpened ? " Round-open" : ""}`}
            >
              <span>{isOpened ? value : ""}</span>
            </div>
          ))}
        </div>
        <div className="Main-column">
          {!box ? null : showPrize ? box.value : `Tu caja es ${box.label}`}
        </div>
        <div className="Side-column Right">
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
      <div className="Board-top">
        <div className="Box-wrapper">
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
