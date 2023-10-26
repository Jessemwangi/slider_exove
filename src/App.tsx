import React, { useState } from "react";
import "./App.css";

type SliderProgress = "idle" | "moving" | "stopped";

function App() {
  const minSliderValue = 0;
  const maxSliderValue = 100;

  const [slider, setSlider] = useState<number>(29);
  const [sliderValueWhenStopped, setsliderValueWhenStopped] =
    useState<number>(slider);
  const [sliderProgress, setsliderProgress] = useState<SliderProgress>("idle");

  function handleSliderChange(event: React.ChangeEvent<HTMLInputElement>) {
    let newValue = Number(event.target.value);
    setSlider(newValue);
  }

  function handleStartSlider(
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ): void {
    setsliderProgress("moving");
  }

  function handleStoppedSlider(
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ): void {
    setsliderProgress("stopped");
    setsliderValueWhenStopped(slider);
  }

  return (
    <div className="wrapper">
      
<h1>Slider handles</h1>
      <div className="slider">
        <div className="min">{minSliderValue}</div>
        <label htmlFor="slider"></label>
        <input
          type="range"
          name="slider"
          value={slider}
          id="slider"
          max={maxSliderValue}
          min={minSliderValue}
          alt="slider input"
          onChange={handleSliderChange}
          onMouseUp={handleStoppedSlider}
          onMouseDown={handleStartSlider}
        />
        <div className="max">{maxSliderValue}</div>
      </div>
      <h1>Results</h1>
      <ol>
        <li>
          MAX Slider Value: <b>{maxSliderValue}</b>
        </li>
        <li>
          MIN Slider Value: <b>{minSliderValue}</b>
        </li>
        <li>
          Dynamic Slider Value: <b>{slider}</b>
        </li>
        <li>
          Value When Stopped: <b>{sliderValueWhenStopped}</b>
        </li>
        <li>
          Slider State:{" "}
          <b>{`${sliderProgress}  ${
            sliderProgress === "moving" ? "..." : "."
          }`}</b>
        </li>
      </ol>
    </div>
  );
}

export default App;
