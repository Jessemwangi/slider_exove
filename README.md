# React Slider Project

This project demonstrates how to create a slider in React with specific functionality. The slider allows users to select a value within a certain range, and it provides real-time feedback on slider movement. The key features of this project are:

- The slider value is stored in the component's state.
- An event is fired with the current slider value.
- The event is triggered only when the user has stopped moving the slider.

## Getting Started

### Prerequisites

- This project requires React 18 and Node.js 18 or above.

### Installation

1. Clone the project from the repository.
2. Install the required Node modules:

   ```bash
   npm install
### Start the Application
To start the application, run the following command:
```npm start```

### Project Output
When you run the application, you'll see the following output on the webpage:

<h3>Results</h3>
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

This output provides information about the slider's behavior, including its minimum and maximum values, the current dynamic value, the value when the user stops moving the slider, and the state of the slider (either "moving" or "stopped").