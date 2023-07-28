import './Search.css';
import React from 'react';
import Button from '../button/Button';

function Search({ search }) {
  const [city, setCity] = React.useState("")
  const [dateIn, setDateIn] = React.useState("")
  const [dateOut, setDateOut] = React.useState("")
  const [error, setError] = React.useState("")

  const handleSearch = (e) => {
    e.preventDefault();
    if (!city || !dateIn || !dateOut) {
      setError("Пожалуйста заполните все поля")
    } else {
      const checkInDate = new Date(dateIn);
      const numberOfDays = parseInt(dateOut, 10);
      const checkoutDate = new Date(checkInDate);
      checkoutDate.setDate(checkoutDate.getDate() + numberOfDays);
      const formattedCheckoutDate = checkoutDate.toISOString().split('T')[0];
      search({ city, dateIn, dateOut: formattedCheckoutDate });
      setError("")
    }
  }

  return (
    <aside className="search">
      <form className="search-form">
        <div className="search__input-wrapper">
          <div className="search__input">
            <label
              htmlFor="location"
              className="search__label">
              Локация
            </label>
            <input
              placeholder="Москва"
              className="input"
              type="text"
              id="location"
              name="location"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="search__input">
            <label
              htmlFor="location"
              className="search__label">
              Дата заселения
            </label>
            <input
              placeholder="Дата заселения"
              className="input"
              type="date"
              id="location"
              name="location"
              required
              value={dateIn}
              onChange={(e) => setDateIn(e.target.value)}
            />
          </div>
          <div className="search__input">
            <label
              htmlFor="location"
              className="search__label">
              Количество дней
            </label>
            <input
              placeholder="Количество дней"
              className="input"
              type="number"
              id="location"
              name="location"
              required
              value={dateOut}
              onChange={(e) => setDateOut(e.target.value)}
            />
          </div>
        </div>
        <Button onClick={handleSearch} value="Найти" />
        {error}
      </form>
    </aside>
  );
}

export default Search;
