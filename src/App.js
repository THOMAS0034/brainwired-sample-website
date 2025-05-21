import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import  {Westock}  from './components/pages/Westock';
import { Aboutus } from './components/pages/Aboutus';
import { Products } from './components/pages/Products'; 
import { Team } from './components/pages/Team';
import { Career } from './components/pages/Career';
import { Home } from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Westock' element={<Westock/>}/>
        <Route path='/Aboutus' element={<Aboutus/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Team' element={<Team/>}/>
        <Route path='/Career' element={<Career/>}/>
      </Routes>
    </div>
  );
}

export default App;
