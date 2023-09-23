import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
