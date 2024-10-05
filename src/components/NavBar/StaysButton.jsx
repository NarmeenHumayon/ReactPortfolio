import "./StaysButton.css";

const StaysButton = ({ text, onbuttonclick, isSelected, ...props }) => {
  return (
    <>
      <button
        className="navbutton"
        onClick={onbuttonclick}
        {...props}
        style={isSelected ? { backgroundColor: "#FFF", opacity: 1 } : {}}
      >
        {text}
      </button>
    </>
  );
};
export default StaysButton;
