import { toKebabCase } from "lib";
import PropTypes from "prop-types";

const Input = ({ label }) => (
  <div>
    <label htmlFor={toKebabCase(label)} className="sr-only">
      {label}
    </label>
    <input type="text" placeholder={label} id={toKebabCase(label)} />
  </div>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Input;
