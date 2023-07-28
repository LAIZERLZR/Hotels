import React from 'react';
import Favorites from '../favorites/Favorites';
import Hotels from './Hotels';
import Search from '../search/Search';
import axios from 'axios';
import img from '../imgs/slider.png';
import './Home.css';
import { useSelector } from 'react-redux';

const Home = () => {
  const [hotels, setHotels] = React.useState([]);
  const [search, setSearch] = React.useState({});
  const [error, setError] = React.useState('Ведите данные поиска отеля 😊');
  const hotelsCount = useSelector((state) => state.favoriteSlice.hotels)
  console.log(hotelsCount);


  React.useEffect(() => {
    const fetchHotels = async () => {
      if (search.city && search.dateIn && search.dateOut) {
        const token = '418c6d386efae10e29f116fef0e9b03c';
        const city = search.city;
        const checkIn = search.dateIn;
        const checkOut = search.dateOut;

        try {
          const response = await axios.get(
            `http://engine.hotellook.com/api/v2/cache.json?location=${city}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&token=${token}`,
          );
          setHotels(response.data);
        } catch (error) {
          setError('Пожалуйста введите корректные данные');
        }
      }
    };
    fetchHotels();
  }, [search]);

  return (
    <div className="home__content">
      <div className='overlay'></div>
      <div className="home__aside">
        <Search search={setSearch} />
        <Favorites />
      </div>
      <section className="home">
        <div className="home__header">
          <ul class="breadcrumb">
            <li>
              <a href="#">Отели</a>
            </li>
            <li class="active">{search.city}</li>
          </ul>
          <p className="date">{search.dateIn}</p>
        </div>

        <div className="slider">
          <img
            src={img}
            alt=""
          />
          <img
            src={img}
            alt=""
          />
          <img
            src={img}
            alt=""
          />
          <img
            src={img}
            alt=""
          />
        </div>
        <p className="home__favorites">
          Добавлено в Избранное:
          <span>
            <b>{hotelsCount.length}</b>
          </span>
        </p>
        {hotels.length !== 0 ? (
          <div>
            {hotels.map((item) => {
              return <Hotels search={search} hotel={item} />;
            })}
          </div>
        ) : (
          <div style={{ textAlign: 'center', fontSize: 24, marginTop: "30%" }}>{error}</div>
        )}
      </section>
    </div>
  );
};

export default React.memo(Home, (prevProps, nextProps) => {
  return true;
});
