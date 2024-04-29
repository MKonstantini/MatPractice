/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import './styles/App.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

// Components
import Navbar from './components/page_parts/Navbar.js';
import Home from './components/Home';
import About from './components/About.js'
import NotFound from './components/NotFound';

// Context
export const UserContext = createContext<any>(null)
import User from './interfaces/User.js';
import Login from './components/Login.js';

// App
function App() {
  // Context States
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
