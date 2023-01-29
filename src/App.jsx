import { Outlet } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
    <Navbar />
      <Outlet />
      
      <span>rodape</span>
    </div>
  );
}

export default App;
