import {
  BrowserRouter, Routes, Route, NavLink,
} from 'react-router-dom';
import Cal from './components/Calculator';
import Fetch from './quote';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <nav className="heading">
        <div className="title">Math Magicians</div>
        <ul>
          <li><NavLink className="link" to="/">Home</NavLink></li>
          <div style={{ borderLeft: '2px solid black', height: '30px' }} />
          <li><NavLink className="link" to="/Cal">Calculator</NavLink></li>
          <div style={{ borderLeft: '2px solid black', height: '30px' }} />
          <li><NavLink className="link" to="/quote">Quote</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cal" element={<Cal />} />
        <Route path="/quote" element={<Fetch />} />
        <Route path="header" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
