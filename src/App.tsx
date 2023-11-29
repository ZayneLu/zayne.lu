import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import UiBundle from './components/UiBundle';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/l-system" element={<UiBundle />} />
      </Routes>
    </Router>
  );
}

export default App;
