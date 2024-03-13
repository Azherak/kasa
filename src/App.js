import Header from './pages/Header/index.jsx';
import Home from './pages/Home/index.jsx';
import Footer from './pages/Footer/index.jsx';
import About from './pages/About/index.jsx';
import Error from './pages/Error/index.jsx';
import Logements from './pages/Logements/index.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logements/:id" element={<Logements />} />
            <Route path="*" element={<Error />} /> 
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;