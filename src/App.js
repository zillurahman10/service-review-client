import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Shared/Header';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer';
import Login from './Pages/Login/Login';
import AllServices from './Pages/AllServices/AllServices';
import Service from './Pages/Home/Service';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/allservices' element={<AllServices></AllServices>}></Route>
        <Route path='/servicedetails' element={<Service></Service>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
