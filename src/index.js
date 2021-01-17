import React from "react";
import ReactDOM from "react-dom";

import Buttons from "./buttons/buttons";

ReactDOM.render(
  <React.StrictMode>
    {
      <Buttons
        initialValueOfButtonGood={0}
        initialValueOfButtonNeutral={0}
        initialValueOfButtonBad={0}
        initialValueTotal={0}
        initialValuePositiveFeedback={0}
      />
    }
  </React.StrictMode>,
  document.getElementById("root")
);
