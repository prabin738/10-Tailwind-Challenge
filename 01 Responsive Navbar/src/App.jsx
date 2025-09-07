import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import logo from "./assets/avt.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <nav className="p-3 bg-white justify-between items-center">
          <a href="#" id="brand" className="flex gap-2 items-center">
            <img src={logo} alt="" className="max-w-12 max-h-12 object-cover" />
            <span>To Desktop</span>
          </a>
        </nav>
      </div>
    </>
  );
}

export default App;
