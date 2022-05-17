
import Footer from "./components/Footer";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from './store/actions/productsAction';
import './App.css';
import Views from './views/Views';
import Header from './components//HeaderNavbar/Header';
import Navbar from './components//HeaderNavbar/Navbar';
import { checkUserExists } from "./store/actions/authActions";



function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
    dispatch(checkUserExists())
  }, [dispatch])

  
  return (
    <div className="App">
      <Header />
      <Navbar />

        <Views />
 
     
      <Footer />


    </div>
  );
}

export default App;
