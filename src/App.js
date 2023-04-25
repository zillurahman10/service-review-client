import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Shared/Header';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer';
import Login from './Pages/Login/Login';
import AllServices from './Pages/AllServices/AllServices';
import Service from './Pages/Home/Service';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/allservices' element={<AllServices></AllServices>}></Route>
        <Route path='/servicedetails/:id' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
