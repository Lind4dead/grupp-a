import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from './store/actions/productsAction';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import ProductsGridView from './views/ProductsGridView';



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

    </div>
  );
}

export default App;
