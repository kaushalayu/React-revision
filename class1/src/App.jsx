import { useState } from "react";
import "./App.css";

function App() {
  let bgColor = ["red","black","green","blue"]; 
  const [color, setColor] = useState("red");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {
            bgColor.map((i,key)=>{
              return(
                <button className="px-4 py-2 rounded-full text-white" style={{backgroundColor:i}} onClick={()=>setColor(i)}>{i}</button>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
