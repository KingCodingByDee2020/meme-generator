import { TextContext } from "context";
import PropTypes from "prop-types";
import { useContext } from "react";
import P from "./P";

const Figure = ({ src }) => {
  const { topText: top, bottomText: bottom } = useContext(TextContext);

  return (
    <figure>
      <P text={top} />
      <img src={src} alt="Random meme" className="shadow-lg" />
      <P text={bottom} />
    </figure>
  );
};

Figure.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Figure;
