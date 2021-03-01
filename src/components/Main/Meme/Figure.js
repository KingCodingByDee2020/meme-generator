import PropTypes from "prop-types";

const Figure = ({ src }) => (
  <figure>
    <img src={src} alt="Random meme" className="shadow-lg" />
  </figure>
);

Figure.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Figure;
