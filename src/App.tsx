/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import './styles/App.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import NotFound from './components/NotFound';

// Context
export const UserContext = createContext<any>(null)

// App
function App() {
  // Context States
  const [user, setUser] = useState<any>()

  return (
    <UserContext.Provider value={[user, setUser]}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
