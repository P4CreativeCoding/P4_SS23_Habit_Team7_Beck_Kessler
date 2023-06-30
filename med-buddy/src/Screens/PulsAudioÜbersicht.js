// Hier wird der Puls angezeigt

/**
 * Hier muss auf jeden fall die verbindung zum ESP8266 stattfinden
 * Über wlan können wir die daten von dem ESP8266 hier aufrufen und visuell anzeigen lassen
 */

import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

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
        <h1>BPM: {bpm}</h1>
      </div>
    );
  };

export default PulsAudioÜbersicht;