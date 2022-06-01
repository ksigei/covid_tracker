import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
