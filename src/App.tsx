import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Header from './pages/Header';
import LSystem from './pages/projects/LSystem';

import './styles.css';

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path="/">
          <Route path="" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Navigate to="/projects/l-system" />} />
          <Route path="/projects/l-system" element={<LSystem />} />
        </Route>
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
