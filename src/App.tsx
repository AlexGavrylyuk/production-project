import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { classNames } from './helpers/classNames/ClassNames';
import { AboutPageAsync } from './pages/aboutPage/AboutPage.async';
import { MainPageAsync } from './pages/mainPage/MainPage.async';
import './styles/index.scss';
import { useTheme } from './theme/useTheme';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPageAsync />} />
          <Route path='/about' element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
