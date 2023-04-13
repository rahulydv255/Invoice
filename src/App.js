import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Invoice from './Components/Invoice';
import CreateInvoice from './Components/CreateInvoice';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<CreateInvoice/>}/>   
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
