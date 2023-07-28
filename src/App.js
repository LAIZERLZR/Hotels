import { Route, Routes, Navigate } from 'react-router-dom';
import Authorization from './pages/authorization/Authorization';
import Header from './components/header/Header';
import Home from './components/Home/Home';

function App() {
  let token = document.cookie;
  return (
    <>
      {token && <Header />}
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to={token ? '/home' : '/auth'} />} />
          {token ? (
            <Route path="/Home" element={<Home />} />
          ) : (
            <Route path="/auth" element={<Authorization />} />
          )}
        </Routes>
      </div>
    </>
  );
}

export default App;
