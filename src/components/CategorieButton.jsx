import "./CategorieButton.css";
const CategorieButton = ({ svgPath, title, onButtonClick, ...props }) => {
  return (
    <div className="cat-cont" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="currentColor"
        class="bi bi-cup-hot"
        viewBox="0 0 16 16"
      >
        {svgPath}
      </svg>
      {title}
    </div>
  );
};

export default CategorieButton;
