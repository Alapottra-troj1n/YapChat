import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthContext } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  const {currentUser,loading} =  useContext(AuthContext)

  console.log(currentUser)
  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to='/login'  />

    }else{

      return children
    }

  }

  if(loading){
    return null;
  }

  return (
    <div className="h-screen flex justify-center items-center bg-violet-200">
        <Routes>
                <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} ></Route>
                <Route path='/login' element={<Login></Login>} ></Route>
                <Route path='/register' element={<Register></Register>} ></Route>
        </Routes>
    </div>
  );
}

export default App;
