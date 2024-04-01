import Login from "./components/Login";
import "./index.css";
// Update your import statement in App.js
import { BrowserRouter as Route, Routes } from "react-router-dom";
import Suggestions from "./components/Suggestions";
import Memos from "./components/Memos";

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/suggestions" element={<Suggestions />} />

        {/* route showing list of memos user has */}
        <Route path="/allMemos" element={<Memos />} />
      </Routes>
    </div>
  );
}

export default App;
