import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from './store/actions/productsAction';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import ProductsGridView from './views/ProductsGridView';



// import Views from './views/Views';
import Header from './components//HeaderNavbar/Header';
import Navbar from './components//HeaderNavbar/Navbar';


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())

  }, [dispatch])

  
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={ <ProductsGridView /> } />
      </Routes>


      <Header />
      <Navbar />
      <div className="container">
        Allt annat ska in här
      </div>

    </div>
  );
}

export default App;
