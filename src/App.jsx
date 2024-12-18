
import {BrowserRouter as Router, Routes, Route,NavLink} from 'react-router-dom';
import {Login} from './Login';
import {SzallasList} from './SzallasList';
import {Logout} from './Logout';
import './App.css';

export default function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <ul className="navbar-nav">
          <li className="navbar-item"><NavLink to="/">Login</NavLink></li>
          
          <li className="navbar-item"><NavLink to="/SzallasList">SzallasList</NavLink></li>
        </ul>
      </nav><li className="navbar-item"><NavLink to="/Logout">kijelentkezés</NavLink></li>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SzallasList" element={<SzallasList />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}
