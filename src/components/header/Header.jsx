import './Header.css';
import { useNavigate } from 'react-router-dom';


function Header() {
  const redirect = useNavigate();

  const handleExit = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    redirect("/auth")
    window.location.reload();
  }
  return (
    <header className="header">
      <p className="header__logo">Simple Hotel Check</p>
      <div style={{ cursor: "pointer" }} onClick={handleExit} className="header__auth-wrapper">
        <div className="header__auth">Выйти</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none">
          <path
            d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
            stroke="#41522E"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 17L21 12L16 7"
            stroke="#41522E"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 12H9"
            stroke="#41522E"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </header>
  );
}

export default Header;
