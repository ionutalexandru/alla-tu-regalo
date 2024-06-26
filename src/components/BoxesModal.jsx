import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Box from "./Box";

const BoxesModal = ({ open, onClose, boxes, onClickBox, title, text }) => {
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={onClose}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Sheet
        variant="outlined"
        sx={{
          maxWidth: 500,
          borderRadius: "md",
          p: 3,
          boxShadow: "lg",
        }}
      >
        <ModalClose variant="plain" sx={{ m: 1 }} />
        <Typography
          component="h2"
          id="modal-title"
          level="h4"
          textColor="inherit"
          fontWeight="lg"
          mb={1}
        >
          {title}
        </Typography>
        <Typography id="modal-desc" textColor="text.tertiary">
          {text}
        </Typography>
        <div style={{ m: 1, display: "flex", flexWrap: "wrap" }}>
          {boxes.map(({ key, label, isOpened }) => (
            <Box
              key={key}
              label={label}
              onClick={() => onClickBox(key)}
              isOpened={isOpened}
            />
          ))}
        </div>
      </Sheet>
    </Modal>
  );
};

export default BoxesModal;
