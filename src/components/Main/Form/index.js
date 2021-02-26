import PropTypes from "prop-types";

const Form = ({ submitHandler }) => (
  <form onSubmit={submitHandler}>
    <div>
      <label htmlFor=""></label>
      <input type="text" />
    </div>
    <div>
      <label htmlFor=""></label>
      <input type="text" />
    </div>
  </form>
);

Form.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

export default Form;
