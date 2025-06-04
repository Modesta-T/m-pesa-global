import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Register from '../pages/Register';
import Subscription from '../pages/Subscription';
import SendReceive from '../pages/SendReceive';
import Balance from '../pages/Balance';
import Settings from '../pages/Settings';
import '../App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/subscribe" element={<Subscription />} />
          <Route path="/send" element={<SendReceive />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
