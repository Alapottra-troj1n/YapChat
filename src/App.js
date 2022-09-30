import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="h-screen flex justify-center items-center bg-violet-200">
        <Routes>
                <Route path='/' element={<Login></Login>} ></Route>
                <Route path='/login' element={<Login></Login>} ></Route>
                <Route path='/register' element={<Register></Register>} ></Route>
        </Routes>
    </div>
  );
}

export default App;
