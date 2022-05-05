import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from './store/actions/productsAction';
import './App.css';


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())

  }, [dispatch])

  
  return (
    <div className="App">
      

    </div>
  );
}

export default App;
