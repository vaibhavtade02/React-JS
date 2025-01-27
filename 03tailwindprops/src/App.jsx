import { useState } from "react";

import "./App.css";
import Card from "./component/card";

function App() {
  const [count, setCount] = useState(0);
  let myobj = {
    name:"vaibhav",
    age:21,
  }

  return (
    <>
      <h1 className="bg-lime-300 text-red-600 p-4 rounded-2xl mb-10 ">
        Tailwind test
      </h1>
      <Card username="Vaibhav" btnText="Click Me"/>  
      <Card username='Tade' btnText="Visit Me"/>
    </>
  );
}

export default App;
