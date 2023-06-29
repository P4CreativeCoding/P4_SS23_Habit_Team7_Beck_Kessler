import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//--Screens--// 
import HomeScreen from './Screens/HomeScreen.js';
import PulsAudioÜbersicht from './Screens/PulsAudioÜbersicht.js';
import MedikamentenÜbersicht from './Screens/MedikamentenÜbersicht.js';
import Kalender from './Screens/Kalender.js';
import Tagebuch from './Screens/Tagebuch.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/pulsAudioÜbersicht" element={<PulsAudioÜbersicht />} />
          <Route path="/medikamentenÜbersicht" element={<MedikamentenÜbersicht />} />
          <Route path="/kalender" element={<Kalender />} />
          <Route path="/tagebuch" element={<Tagebuch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};


export default App;