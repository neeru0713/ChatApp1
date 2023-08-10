import "./App.css";
import SideBar from "./components/SideBar";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="chatApp grid-container h-100">
      <SideBar />
      <Chat />
    </div>
  );
}

export default App;
