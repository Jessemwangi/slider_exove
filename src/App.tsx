import React, { useState } from "react";
import "./App.css";

type SliderProgress = "idle" | "moving" | "stopped";

function App() {
  const MIN_SLIDER_VALUE = 0;
  const MAX_SLIDER_VALUE = 100;

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
    <div>
      <svg
        className="icon-circle z-0"
        width="40px"
        height="40px"
        style={{ padding: "4px" }}
        viewBox="0 0 168 168"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path
            fill="rgb(255, 255, 255)"
            d="M84.0007248,41 C60.2903835,41 41,60.2903835 41,83.9992752 C41,107.711066 60.2903835,127 84.0007248,127 C107.709617,127 127,107.711066 127,83.9992752 C127,60.2903835 107.709617,41 84.0007248,41 M84.000724,168 C37.6829603,168 0,130.31704 0,83.999276 C0,37.6829603 37.6829603,0 84.000724,0 C130.31704,0 168,37.6829603 168,83.999276 C168,130.31704 130.31704,168 84.000724,168"
          ></path>
        </g>
      </svg>

      <div className="slider">
        <div className="min">{MIN_SLIDER_VALUE}</div>
        <label htmlFor="slider"></label>
        <input
          type="range"
          name="slider"
          value={slider}
          id="slider"
          max={MAX_SLIDER_VALUE}
          min={MIN_SLIDER_VALUE}
          alt="slider input"
          onChange={handleSliderChange}
          onMouseUp={handleStoppedSlider}
          onMouseDown={handleStartSlider}
        />
        <div className="max">{MAX_SLIDER_VALUE}</div>
      </div>
      <h1>Results</h1>
      <ol>
        <li>
          MAX Slider Value: <b>{MAX_SLIDER_VALUE}</b>
        </li>
        <li>
          MIN Slider Value: <b>{MIN_SLIDER_VALUE}</b>
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
