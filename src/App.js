import './App.css';
import Nav from './components/nav';
import Page from './components/page';
import Rupak from './components/rupak';
import Login from './components/login';
import Register from './components/register/register';
// import Form2 from './components/form2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Page />} />
        <Route path='/rupak' element={<Rupak />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register/*' element={<Register />} />
        {/* <Route path='/form2' element={<Form2 />} /> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
