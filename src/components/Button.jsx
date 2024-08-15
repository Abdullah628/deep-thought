import "./styles/Button.css"

// eslint-disable-next-line react/prop-types
const Button = ({ children, onClick, ...props }) => {
  return (
    <button className="custom-button" onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;