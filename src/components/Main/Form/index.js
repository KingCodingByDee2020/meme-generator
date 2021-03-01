import PropTypes from "prop-types";
import Input from "./Input";

const Form = ({ submitHandler }) => (
  <form
    onSubmit={submitHandler}
    className="flex flex-col items-center gap-2 pb-4"
  >
    {[{ label: "Top Text" }, { label: "Bottom Text" }].map(
      ({ label }, index) => (
        <Input key={index} label={label} />
      )
    )}

    <button className="p-4 bg-green-500 rounded text-white">Submit</button>
  </form>
);

Form.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

export default Form;
