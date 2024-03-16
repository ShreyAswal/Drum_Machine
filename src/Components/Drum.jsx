import React, { useEffect, useState } from "react";
import "./Drum.css";
import m1 from "./music/Heater-1.mp3";
import m2 from "./music/Heater-2.mp3";
import m3 from "./music/Heater-3.mp3";
import m4 from "./music/Heater-4.mp3";
import m5 from "./music/Heater-6.mp3";
import m6 from "./music/Dsc_Oh.mp3";
import m7 from "./music/Kick_n_Hat.mp3";
import m8 from "./music/Kick.mp3";
import m9 from "./music/Cev_H2.mp3";

function Drum() {
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(0.8);

  const sounds = {
    "Guitar-1": m1,
    "Guitar-2": m2,
    "Guitar-3": m3,
    "Guitar-4": m4,
    Clap: m5,
    "Open-HH": m6,
    "Kick n` Hat": m7,
    Kick: m8,
    "Closed-HH": m9,
  };

  //For Power Button
  const handleToggle = () => {
    const toggle = document.getElementById("toggle");
    !power ? (toggle.style.float = "right") : (toggle.style.float = "left");
    setPower(!power);
  };

  //   const display = document.getElementById("display");

  //For Volume Range
  const handleVolume = (e) => {
    if (power) {
      const display = document.getElementById("display");

      display.innerHTML = "Volume: " + e.target.value * 100;
      const newVolume = parseFloat(e.target.value);
      setVolume(newVolume); // Update volume state
      console.log(newVolume);
    }
  };

  //For the drum pads
  const playSound = (name,sound) => {
    if (power) {
      const display = document.getElementById("display");
      console.log(name)
      //   console.log(name + " : " + sound);
        display.innerHTML = name;
      const audio = new Audio(sound);
        console.log(audio);
      audio.volume = volume; // Set volume based on the current volume level
      audio.play();
    }
  };

  //For the keyboard events
  useEffect(() => {
    const handleKeyDown = (event) => {
      const keyPressed = event.key.toUpperCase();
      //   console.log(keyPressed)
      const buttonId =
        ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"].indexOf(keyPressed) + 1;
      const button = document.getElementById(buttonId.toString());
      if (button) {
        button.click();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div id="drum-machine">
      <div id="drum-pads">
        <div id="inner-drum-pads">
          {Object.entries(sounds).map(([name, sound], i) => (
            <button
              key={name}
              id={i + 1}
              className="drum-pad"
              onClick={() => playSound(name,sound)}
            >
              {["Q", "W", "E", "A", "S", "D", "Z", "X", "C"][i]}
            </button>
          ))}
        </div>
      </div>
      <div id="settings">
        <div id="power">
          <p>Power</p>
          <div id="powerButton" onClick={handleToggle}>
            <div id="toggle"></div>
          </div>
        </div>
        <div id="display">Made by Shrey :)</div>
        <div id="volume">
          <p>Volume</p>
          <input
            type="range"
            id="volumeRange"
            min={0}
            max={1}
            value={volume}
            step={0.01}
            onChange={(e) => handleVolume(e)}
          />
        </div>
      </div>
    </div>
  );
}

export default Drum;
