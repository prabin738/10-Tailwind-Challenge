import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import logo from "./assets/avt.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleMenu = () => {};
  return (
    <>
      <div>
        <nav className="p-3 flex bg-white justify-between items-center">
          <a href="#" id="brand" className="flex gap-2 items-center">
            <img src={logo} alt="" className="max-w-12 max-h-12 object-cover" />
            <span className="text-lg font-medium ">To Desktop</span>
          </a>
          <button className="p-2" onClick={handleMenu}>
            <i
              className="fa-solid  fa-bars text-gray-600"
              aria-hidden="true"
            ></i>
          </button>
        </nav>
      </div>
    </>
  );
}

export default App;
