import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home";
import Navbar from './pages/navbar';
import Main from './pages/main';
import FAQ from './pages/faq';
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar stays fixed at the top */}
        <Navbar />
        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
