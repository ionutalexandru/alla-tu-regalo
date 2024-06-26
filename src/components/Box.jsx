const Box = ({ label, onClick, isOpened }) => {
  let className = "Box";
  if (isOpened) {
    className += " Box-closed";
  }
  return (
    <div onClick={onClick} className={className}>
      <b>{label}</b>
    </div>
  );
};

export default Box;
