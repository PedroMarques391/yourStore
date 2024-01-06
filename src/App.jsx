import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import SideBar from './components/SideBar';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <HashRouter basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <SideBar />
      <Footer />
    </HashRouter>
  );
}

export default App;
