const SVGBox = ({ onClick, label, className }) => (
  <div className={className}>
    <svg
      fill="#000000"
      height="90px"
      width="90px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      stroke="transparent"
      onClick={onClick}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <g>
          <path d="M480,32H32C14.327,32,0,46.328,0,64v64h512V64C512,46.328,497.673,32,480,32z" />{" "}
          <path d="M32,448.008C32,465.672,46.325,480,63.995,480h384.011c17.67,0,31.994-14.328,31.994-31.992V160H32V448.008z M208,224h96 c17.673,0,32,14.328,32,32s-14.327,32-32,32h-96c-17.673,0-32-14.328-32-32S190.327,224,208,224z" />{" "}
        </g>
      </g>
    </svg>
    <span className="label">{label}</span>
  </div>
);

const Box = ({ label, onClick, isOpened, size = "" }) => {
  let className = "box";
  if (isOpened) {
    className += " open";
  }
  if (size) {
    className += ` ${size}`;
  }
  return <SVGBox onClick={onClick} label={label} className={className} />;
};

export default Box;
