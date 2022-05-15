import React from 'react';
import './App.css';
import Header from './Header/Header';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import Home from './Home/Home';
import { Route, BrowserRouter as Router,Routes} from 'react-router-dom';
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            
            <Route exact path='/' element={<PrivateRoute/>}>
              <Route exact path='/' element={<Home/>}/>
            </Route>

            <Route path="/signup" element={<Signup/>}></Route>

            <Route path="/login" element={<Login/>}></Route>

          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
