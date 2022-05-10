import './App.css';
import Header from './components//HeaderNavbar/Header';
import Navbar from './components//HeaderNavbar/Navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="container">
        Allt annat ska in här
      </div>
    </div>
  );
}

export default App;
