import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './Create';
import Read from './Read';
import Update from './Update';
import Login from './Main';
import './App.css';
import LoginPage from './LoginPage';

function App() {
  return (
     
        <div className="main">
          <div className="content">
            <div>
              <BrowserRouter>
              <Routes>
                <Route path='/' element={<Read/>}/>
                <Route path='/Create' element={<Create/>}/>
                <Route path='/Read' element={<Read/>}/>
                <Route path='/Update' element={<Update/>}/>
                <Route path='/Login' element={<Login/>}/>
                <Route path='/LoginPage' element={<LoginPage/>}/>
                <Route path='/Read' element={<Read/>}/>
              </Routes>
              </BrowserRouter>
            </div>
          </div>
        </div>
  
  );
}

export default App;