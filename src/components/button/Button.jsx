import './Button.css';

function Button({ onClick, value, type }) {
  return <button type={type} onClick={onClick} className="button">{value}</button>;
}

export default Button;
