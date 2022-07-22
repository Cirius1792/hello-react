
const SUPPORTED_FONTS = ["Times New Roman", "Arial"];

const TextComponent = (props) => {
  const text = props.text;
  const font = props.font
    ? props.font
    : SUPPORTED_FONTS[Math.floor(Math.random() * SUPPORTED_FONTS.length)];

  return <p style={{ fontFamily: font }}>{text}</p>;
};

export default TextComponent;
export {SUPPORTED_FONTS};
