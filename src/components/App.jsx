import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../pages/Home';
import AdminPanel from '../pages/AdminPanel';
import Register from '../pages/Register';
import Subscription from '../pages/Subscription';
import SendReceive from '../pages/SendReceive';
import Balance from '../pages/Balance';
import Settings from '../pages/Settings';
import { LanguageProvider } from '../LanguageContext';  // import your LanguageProvider
import '../App.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/register" element={<Register />} />
            <Route path="/subscribe" element={<Subscription />} />
            <Route path="/send" element={<SendReceive />} />
            <Route path="/balance" element={<Balance />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
