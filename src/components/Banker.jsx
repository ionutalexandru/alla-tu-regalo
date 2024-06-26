import { useState } from "react";
import IconButton from "@mui/joy/IconButton";
import CallIcon from "@mui/icons-material/Call";
import BoxesModal from "./BoxesModal";

const Banker = ({
  boxes,
  isRinging,
  setIsRinging,
  onClickBox,
  initOpen = false,
  title = "El banquero te quiere hacer una oferta",
  text = "Te ofrece la oportunidad de cambiar de caja. Si quieres cambiarla, es hora de elegirla.",
}) => {
  const [open, setOpen] = useState(initOpen);

  const handleClose = () => {
    setOpen(false);
    setIsRinging(false);
  };

  const handleClickBox = (key) => {
    onClickBox(key);
    handleClose();
  };

  if (open) {
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
  } else if (isRinging) {
    return (
      <div>
        <IconButton
          onClick={() => {
            setOpen(true);
            setIsRinging(false);
          }}
          variant="plain"
          style={{ position: "absolute", bottom: "1rem", right: "1rem" }}
        >
          <CallIcon />
        </IconButton>
      </div>
    );
  } else {
    return null;
  }
};

export default Banker;
