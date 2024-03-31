import ArrowSquare from '../icons/ArrowSquare';
import './Button.css'

function Button ({ onClick, label }) {

  return (
    <button style={buttonStyles} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
