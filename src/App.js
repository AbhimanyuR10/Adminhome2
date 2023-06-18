import logo from './logo.svg';
import './App.css';
import AdminH from './components/AdminH';
import { Route, Routes } from 'react-router-dom';
import Steve from './components/Steve';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Steve/>}/>
        <Route path='/AdminH' element={<AdminH/>}/>
      </Routes>
    </div>
  );
}

export default App;
