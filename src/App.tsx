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
        <Route path="/">
          <Route index element={<h4>home</h4>} />
          <Route path="l-system" element={<UiBundle />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
