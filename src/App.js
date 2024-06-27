import React from "react";
import data from './data'
import Tours from "./components";

const App = () => {

  const [tours , setTours] = useState(data)

  return (
    <div>
      <Tours></Tours>
    </div>
  )
};

export default App;
