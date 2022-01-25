import './App.css';
import Home from './Pages/Home/Home/Home';
import NavBar from './Pages/NavBar/NavBar';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="">
     <BrowserRouter>
     <NavBar/>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
