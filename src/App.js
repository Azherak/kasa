import './assets/App.css';
import Header from './components/Header/index.jsx';
import Home from './components/Home/index.jsx';
import Footer from './components/Footer/index.jsx';
import About from './components/About/index.jsx';
import Error from './components/Error/index.jsx';
import Logements from './components/Logements/index.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logements/:id" element={<Logements />} />
            <Route path="*" element={<Error />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;