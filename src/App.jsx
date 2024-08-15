
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo = "Bienvenido a Santeria San Cayetano"/>
    </div>
  );
}

export default App;
