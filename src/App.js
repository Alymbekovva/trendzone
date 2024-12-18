import React, {useState} from 'react';
import { BrowserRouter as Router,  Routes, Route,} from 'react-router-dom';
import Home from './pages/Home';
import EventsList from './pages/EventsList';
import EventDetails from './pages/EventDetails';
import Profile from './pages/Profile';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateEvent from './components/CreateEvent';
import EventCard from './components/EventCard';
import './App.css'

function App() {
  const [eventData, setEventData] = useState(null);

  const handleEventSubmit = (data) => {
    setEventData(data); // Локальное сохранение данных
  };


  return (
    <>
          <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventCard />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<CreateEvent onEventSubmit={handleEventSubmit}/>} />
          
          </Routes>
      </div>
      <Footer />
    </>

  );
}

export default App;
