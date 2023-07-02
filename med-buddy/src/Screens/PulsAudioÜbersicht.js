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
import "./PulsAudioÜbersicht.css";
import audioFile from "../Assets/Ichwillnichtmehr.mp3";

const PulsAudioÜbersicht = () => {

    const [bpm, setBpm] = useState(0);
    const [audio] = useState(new Audio(audioFile));

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch ('http://192.168.0.10/data');
            const data = await response.json();
            setBpm(data.bpm);
        }catch (error){
            console.error(error);
        }
    };

    const interval = setInterval(fetchData, 1000); 

    return () => clearInterval(interval);
},[]);

const playAudio = () => {
  audio.play();
};
    
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
      <div className="centerHorizontally">
      <div className="kreisLila">
        <div className="inidikatorKreis" style={(bpm >= 70 && bpm <= 90) ? {border: "4px solid #A5CD50"} : {border: "4px solid #ff0000"}}>
          <h1> {bpm} bpm</h1>
        </div>
      </div>
      </div>
      <div className="centerHorizontally">
        <button onClick={playAudio}>Play Audio</button>
      </div>
      </div>
    );
  };

export default PulsAudioÜbersicht;