import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login></Login>}/>
      </Routes>
    </div>
  );
}

export default App;
