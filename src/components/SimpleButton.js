import PropTypes from "prop-types";

function SimpleButton({
  backgroundColor = "orange",
  label = "click this button",
  border = "2px solid red",
}) {
  return (
    <button style={{ backgroundColor: backgroundColor, border: border }}>
      {label}
    </button>
  );
}
SimpleButton.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  border: PropTypes.string,
};
export default SimpleButton;
