import logo from './logo.svg';
import './App.css';
import {openModal,openModal1} from './components/openModal';

function App() {

  function handleOpenModal(){
    openModal()
  } 
  function handleOpenModal1(){
    openModal1()
  }

  return (
    <div className="App">
      <button onClick={handleOpenModal}>open modal</button>
      <button onClick={handleOpenModal1}>open modal</button>
    </div>
  );
}

export default App;
