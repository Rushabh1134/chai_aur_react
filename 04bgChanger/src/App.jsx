import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen bg-black duration-100"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center top-12 p-2 inset-x-0 ">
          <div className="flex bg-white rounded-full p-4 gap-4">
            <button className="bg-red-600 rounded-xl p-2 text-white"
            onClick={() => setColor("red")}>
              Red
            </button>
            <button className="bg-blue-700 rounded-xl p-2 text-white"
            onClick={() => setColor("blue")}>
              Blue
            </button>
            <button className="bg-pink-300 rounded-xl p-2 text-white"
            onClick={() => setColor("pink")}>
              Pink
            </button>
            <button className="bg-orange-400 rounded-xl p-2 text-white"
            onClick={() => setColor("orange")}>
              Orange
            </button>
            <button className="bg-black rounded-xl p-2 text-white"
            onClick={() => setColor("black")}>Black</button>
            <button className="bg-yellow-300 rounded-xl p-2"
              onClick={() => setColor("yellow")}>Yellow</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
