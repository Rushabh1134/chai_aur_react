import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNunberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const psswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUCWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNunberAllowed) str += "0123456789";
    if (isCharAllowed) str += "'\"!@#$%^&*()_+-=,./<>?\\|[]{}`~";
    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, isNunberAllowed, isCharAllowed, setPassword]);

  const copyPass = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    psswordGenerator();
  }, [length, isNunberAllowed, isCharAllowed, psswordGenerator]);
  return (
    <>
      <div className="w-full  max-w-3xl mx-auto shadow-md text-gray-950 bg-red-400 px-4 py-3 mt-40   my-8 rounded-xl text-4xl">
        <h1 className="text-center text-4xl text-gray-900 my-3">
          Password Generator
        </h1>
        <div className="flex shadow mb-4 rounded-xl overflow-hidden text-2xl">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700 text-white  px-3 py-0.5 shrink-0 hover:bg-blue-800"
            onClick={copyPass}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer "
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-lg">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isNunberAllowed}
              id="inputNumber"
              onChange={() => {
                setIsNumberAllowed((prev) => !prev);
              }}
            />
            <label className="text-lg">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isCharAllowed}
              id="inputChar"
              onChange={() => {
                setIsCharAllowed((prev) => !prev);
              }}
            />
            <label className="text-lg">Special Char</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;