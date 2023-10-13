import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //Whether DarkMode is enabled or not
  const [alert, setAlert] = useState(null); //Whether Alert is enabled or not
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextTrove" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
    <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze" />} />
    <Route exact path="/about" element={<About mode={mode} />} />
</Routes> */}

          {/* <About mode={mode} /> */}
          <TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze" />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
