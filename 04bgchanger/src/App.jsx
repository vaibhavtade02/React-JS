import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg shadow-gray-400 bg-white rounded-2xl p-3 ">
          <button
            onClick={() => setColor("red")}
            className="p-2 rounded-xl gap-1 shadow-lg  "
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="p-2 rounded-xl gap-1"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("olive")}
            className="p-2 rounded-xl gap-1"
            style={{ backgroundColor: "Olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => setColor("gray")}
            className="p-2 rounded-xl gap-1"
            style={{ backgroundColor: "Gray" }}
          >
            Gray
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="p-2 rounded-xl gap-1"
            style={{ backgroundColor: "Yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("pink")}
            className="p-2 rounded-xl gap-1"
            style={{ backgroundColor: "Pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("purple")}
            className="p-2 rounded-xl gap-1"
            style={{ backgroundColor: "Purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("lavender")}
            className="p-2 rounded-xl gap-1"
            style={{ backgroundColor: "lavender" }}
          >
            lavender
          </button>
          <button
            onClick={() => setColor("white")}
            className="p-2 rounded-xl gap-1 border-1"
            style={{ backgroundColor: "White" }}
          >
            White
          </button>
          <button
            onClick={() => setColor("black")}
            className="p-2 rounded-xl gap-1 text-white "
            style={{ backgroundColor: "Black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
