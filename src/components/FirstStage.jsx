import { useState } from "react";
import BoxesModal from "./BoxesModal";

const FirstStage = ({
  boxes,
  onClickBox,
  initOpen = true,
  title = "Es hora de empezar",
  text = "Así que, elige la caja que quieras mantener hasta el final del juego (o no)",
}) => {
  const [open, setOpen] = useState(initOpen);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickBox = (key) => {
    onClickBox(key);
    handleClose();
  };

  return (
    <BoxesModal
      open={open}
      onClose={handleClose}
      title={title}
      text={text}
      boxes={boxes}
      onClickBox={handleClickBox}
    />
  );
};

export default FirstStage;
