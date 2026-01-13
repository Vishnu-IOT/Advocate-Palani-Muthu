// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Aboutus from './aboutus';
import Home from './home';
import Footer from './pages/footer';
import Navbar from './pages/navbar';
import './styles/styles.css';
import Contact from './contact';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
