import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Header from "../Header";
import "./PulsAudioÜbersicht.css";
import audioFile from "../Assets/Ichwillnichtmehr.mp3";
import {CiPlay1} from "react-icons/ci";
import KalenderKarte from "./Components/KalenderKarte.js";

const PulsAudioÜbersicht = () => {

    const [bpm, setBpm] = useState(0);
    const [audio] = useState(new Audio(audioFile));

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch ('http://192.168.0.10/data');
            // const response = await fetch ('https://p4-team7-server.vercel.app/pushData');
            const data = await response.json();
            // push to srrver 

            setBpm(data.bpm);
console.log("test");
            // await fetch('https://p4-team7-server.vercel.app/pushData', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify({ bpm: data.bpm })
            // }).then(res=>console.log(res))
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
      <KalenderKarte/>
        <Header backLink="/" />
        <Link to="/kalender"></Link>
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
          <Link to="/tagebuch">
            <button className="button"> Notiz hinzufügen </button>
          </Link>
          <button className="button"> Speichern </button>
        </div>
      </div>
    );
  };

export default PulsAudioÜbersicht;