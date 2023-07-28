import React from 'react';
import './Authorization.css';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';

function Authorization() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const redirect = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Введите почту и пароль");
    }

    if (!emailCheck.test(email)) {
      setError("Введите корректную почту");
    }

    const fakeEmail = "pochta@gmail.com";
    const fakePassword = "password";

    if (email === fakeEmail && password === fakePassword) {
      document.cookie = "token=userToken"
      redirect("/home")
      window.location.reload();
    } else {
      setError("Неверные учетные данные");
    }
  };

  return (
    <>
      <div className='authorization__block'>
        <h2 className='authorization__title'>Simple Hotel Check</h2>
        <div>
          <form onSubmit={handleLogin}>
            <div className='input__block'>
              <label>Логин</label>
              <input
                type="email"
                name="email"
                placeholder="Почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='input__block'>
              <label>Пароль</label>
              <input
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error}
            <Button value={'Войти'} type={'submit'} />
            {/* <button type="submit">Войти</button> */}
          </form>
        </div>
      </div>
      <div className="overlay"></div>
    </>
  );
}

export default Authorization;
