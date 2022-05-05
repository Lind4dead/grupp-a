import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './store/actions/productsAction';
import './App.css';
import ProductCard from './components/ProductCard';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())

  }, [dispatch])

  const { data: products, loading } = useSelector(state => state.products)

  return (
    <div className="App">
      <div className='container'>
        <div className="row">
          {
            products.map(product => <div className='col-6 col-md-4 col-xl-3'><ProductCard key={product.id} product={product} /></div>)
          }
        </div>
      </div>

    </div>
  );
}

export default App;
