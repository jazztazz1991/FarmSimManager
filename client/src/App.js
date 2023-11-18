import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home.js';
import { Fields } from './pages/fields.js';
import { Farm } from './pages/farm.js';
import { Auth } from './pages/auth.js';
import { AddField } from './pages/addField.js';
import { Navbar } from './components/navbar.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/fields" element={<Fields />} />
          <Route path="/farm" element={<Farm />} />
          <Route path="/addField" element={<AddField />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
