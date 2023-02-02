import React from 'react'
import Login from './Login'
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';
import UpdateProfile from './UpdateProfile';
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
      <Container 
        className='d-flex align-items-center
        justify-content-center' style={{ minHeight: "100vh" }}
      >
      <div className='w-100' style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              {/* Redirect to login page if not logged in */}
              <Route exact path='/' element={<PrivateRoute />}>
                <Route exact path='/' element={<Dashboard />} />
              </Route>
              <Route path='/update-profile' element={<PrivateRoute />}>
                <Route path='/update-profile' element={<UpdateProfile />} />
              </Route>
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
              <Route path='/forgot-password' element={<ForgotPassword />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
    
    
  );
}

export default App;
