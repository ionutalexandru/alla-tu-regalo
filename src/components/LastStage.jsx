import { useState } from "react";
import BoxesModal from "./BoxesModal";

const LastStage = ({
  boxes,
  onClickBox,
  initOpen = true,
  title = "Llegamos al final...",
  text = "Tienes la oportunidad de hacer un último cambio...",
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

export default LastStage;
