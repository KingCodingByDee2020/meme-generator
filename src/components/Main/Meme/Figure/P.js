import PropTypes from "prop-types";

const P = ({ text }) => (
  <p className="bg-black p-2 text-5xl text-center text-white">{text}</p>
);

P.propTypes = { text: PropTypes.string.isRequired };

export default P;
