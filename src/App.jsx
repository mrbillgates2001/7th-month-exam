import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Likes from './pages/Likes/Likes';
import Playlists from './pages/Playlists/Playlists';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Likes />} />
          <Route path="/playlist/:id" element={<Playlists />} />
        </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App