import React,{useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert";
function App() {

  const[alert,setAlert]=useState(null)
  const handleAlert=(type,message)=>{
         setAlert({
          msg : message,
          type: type
         })
         setTimeout(() => {
          setAlert(null)
         }, 1500);
  }
  return (
    <div>
    <Router>
    <Navbar title="TextUtils" about="About us"/>
    <Alert alert={alert}/>
    <Routes>
    <Route exact path="/" element={<TextForm handleAlert={handleAlert}/>} />
    <Route exact path="/about" element={<About/>} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
