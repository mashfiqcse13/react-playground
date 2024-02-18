import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import NotFoundPage from './Pages/NotFoundPage';
import HomePage from './Pages/HomePage';
import DashboardPage from './Pages/DashboardPage';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<NavWrapper />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
function NavWrapper() {
  return <>
    <nav className='wrapper'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
    <Outlet />
  </>
}

export default App;
