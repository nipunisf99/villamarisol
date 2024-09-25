import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './Components/Home';
import Stay from './Components/Stay';
import Gallery from './Components/Gallery';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />     {/* Home page */}
        <Route path="/stay" element={<Stay />} /> {/* About page */}
        <Route path="/gallery" element={<Gallery />} /> {/* About page */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
