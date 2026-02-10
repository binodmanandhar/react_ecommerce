import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="checkout" element={<div>Test checkout page</div>} />
      </Routes>
    </div>
  );
}

export default App;
