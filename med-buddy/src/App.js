import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/pulsAudioScreen" element={<PulsAudioScreen />} />
          <Route path="/medikamentenÜbersicht" element={<MedikamentenÜbersicht />} />
          <Route path="/karlender" element={<Karlender />} />
          <Route path="/tagebuch" element={<Tagebuch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}