import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Foot } from './components/Foot';
import { Route, Routes } from 'react-router-dom';
import  {Westock}  from './components/pages/Westock';
import { Aboutus } from './components/pages/Aboutus'; 
import { Team } from './components/pages/Team';
import { Career } from './components/pages/Career';
import { Home } from './components/pages/Home';
import { Blog } from './components/pages/Blog';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ScrollToTop from './components/Scroll';


function App() {
  return (
    <div
      className="App">
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Westock' element={<Westock/>}/>
        <Route path='/Aboutus' element={<Aboutus/>}/>
        <Route path='/Team' element={<Team/>}/>
        <Route path='/Career' element={<Career/>}/>
        <Route path='/Blog' element={<Blog/>}/>
      </Routes>
      <Foot/>
    </div>
  );
}

export default App;
