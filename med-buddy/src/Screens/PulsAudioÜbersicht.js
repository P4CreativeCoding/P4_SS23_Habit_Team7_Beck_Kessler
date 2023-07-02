import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Header from "../Header";
import "./PulsAudioÜbersicht.css";
import audioFile from "../Assets/Ichwillnichtmehr.mp3";
import {CiPlay1} from "react-icons/ci";

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
      <div className="kalenderBox"></div>
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
        <div className="audioClip">
          <button className="audioButton" onClick={playAudio}>{<CiPlay1 />}  </button>
        </div>
      </div>
        <div>
          <button className="button" onClick={playAudio}> Notiz hinzufügen </button>
          <button className="button" onClick={playAudio}> Speichern </button>
        </div>
      </div>
    );
  };

export default PulsAudioÜbersicht;