import React from "react";
import ReactDOM from "react-dom";

import { square } from "./math";

const App = () => {
  return (
    <div>
      <p>React here! + {square(5)}</p>
      <p>{process.env.NODE_ENV}</p>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));