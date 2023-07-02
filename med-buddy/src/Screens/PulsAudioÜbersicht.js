// Hier wird der Puls angezeigt
/*
    Kalender oben
    zurück button
    Titel
    Kreis
    farbiger kreis
    bpm

    audio 
    button
    button
*/

import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Header from "../Header";

const PulsAudioÜbersicht = () => {

    const [bpm, setBpm] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch ('http://192.168.0.158/data');
            const data = await response.json();
            setBpm(data.bpm);
        }catch (error){
            console.error(error);
        }
    };

    const interval = setInterval(fetchData, 1000);

    return () => clearInterval(interval);
},[]);
    
    return (
      <div>
      <div>
        <Header backLink="/" />
        <Link to="/kalender">
          <p>Zurück zum Kalender</p>
        </Link>
      </div>
      <div>
          <h1 className="title"> Puls und Blutdruck</h1> 
        </div> 
        <div className="kreisLila">
        <h1> {bpm} bpm</h1>
        </div>
      </div>
    );
  };

export default PulsAudioÜbersicht;