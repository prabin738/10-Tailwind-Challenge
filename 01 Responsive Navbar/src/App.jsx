import logo from "./assets/avt.png";
import { TiThMenu } from "react-icons/ti";
import "./index.css";

function App() {
  const handleMenu = () => {
    alert("Hello");
  };

  return (
    <>
      <nav className="p-3 flex bg-white justify-between items-center">
        <a href="#" id="brand" className="flex gap-2 items-center">
          <img
            src={logo}
            alt=""
            className="object-cover max-w-12 max-h-12 items-center"
          />
          <span className="text-lg font-medium font-display">To Desktop</span>
        </a>
        <button className="p-2 md:hidden" onClick={handleMenu}>
          <TiThMenu size={32} className="text-gray-300 " />
        </button>
      </nav>
    </>
  );
}

export default App;
