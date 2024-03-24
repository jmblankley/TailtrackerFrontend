import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import EventPage from './pages/EventPage';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import IndividualEventPage from './pages/IndividualEventPage';

function App() {

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/event" element={<EventPage/>}/>
          <Route path="/class-event/:eventId" element={<IndividualEventPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
