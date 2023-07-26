import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import CartPage from './Pages/CartPage/CartPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/Reduxstore';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store} >
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>
          <ToastContainer position='bottom-left' />
          <Footer />
        </div>
      </Router>
    </Provider>

  );
}

export default App;
