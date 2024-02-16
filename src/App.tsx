import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import NotFoundPage from './Pages/NotFoundPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<NavWrapper />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
function NavWrapper() {
  return <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
    <Outlet />
  </>
}

export default App;
