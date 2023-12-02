import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Nav from './pages/Nav';
import LSystemBundle from './l-system/components/LSystemBundle';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/">
            <Route path="" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Navigate to="/projects/l-system" />} />
            <Route path="/l-system" element={<Navigate to="/projects/l-system" />} />
            <Route path="/projects/l-system" element={<LSystemBundle />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
