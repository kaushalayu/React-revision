import { useState } from "react";
import "./App.css";
import { useCallback } from "react";
import { useEffect,useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  // useRef Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (char) str += "!@#$&*";

    for (let i = 0; i <= length; i++) {
      let charch = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charch);
    }
    setPassword(pass);
  }, [length, number, char, setPassword]);

  const copyTo = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length+1);
  window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator();

  },[length,number,char,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-600">
        <h1 className="text-white text-center">Password Generater</h1>
        <div className="flex justify-center shadow rounded-lg overflow-h-hidden">
          <input type="text" value={password} className="outline-none w-full py-1 px-3 bg-white rounded m-4" placeholder="Password" readOnly ref={passwordRef}/>
          <button className=" mb-4 outline-none text-white px-2 rounded bg-blue-600 mt-3" onClick={copyTo} >Copy</button>

        </div>
        <div className="flex text-sm gap-x-2 mt-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={100} value={length} className="cursor-pointer" onChange={(e)=>{setLength(e.target.value)}} />
            <label>Length:{length}</label>
          </div>
           <div className="flex items-center gap-x-1">
            <input type="checkbox" id="numberInput" defaultChecked={number} onChange={()=>{setNumber((prev)=> !prev)}} />
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" id="numberInput" defaultChecked={char} onChange={()=>{setChar((prev)=> !prev)}} />
            <label>Charchater</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
