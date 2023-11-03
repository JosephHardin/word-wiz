import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Editor from "./components/Editor";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  if (mode === "light") {
    document.body.style.backgroundColor = "#d4ddfa";
  }
  let toggle = () => {
    console.log("toggle clicked");
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#030a24";
      document.body.style.color = "white";
      // showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#d4ddfa";
      document.body.style.color = "black";
      // showAlert("Light mode is enabled", "success");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar title="WikiELN" about="About" mode={mode} toggleBtn={toggle} section="Editor" />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"

          ></Route>
          <Route path="/about" element={<About mode={mode} />}></Route>
          <Route path="/section" element={<Editor mode={mode} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
