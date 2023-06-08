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
      <nav>
        <div>Math Magicians</div>
        <ul>
          <li><NavLink className="link" to="/">Home</NavLink></li>
          <li><NavLink className="link" to="/Cal">Calculator</NavLink></li>
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
