import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/index.jsx';
import Cuts from './components/Cuts.jsx';
import Specials from './components/Specials.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Login from './components/Login.jsx';
import OrderOnline from './components/Order-online.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuts" element={<Cuts />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order-online" element={<OrderOnline />} />
      </Routes>
    </Router>
  );
}

export default App;