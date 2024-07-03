import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1700)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#292929'
      showAlert("Dark Mode Has Been Enabled", "success");
      document.title = 'TextUtils -Dark mode'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Has Been Enabled", "success");
      document.title = 'TextUtils -Light mode'
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextConverter" about="about" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} /><br></br>
      <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}>
            </Route>
            <Route exact path="*" element={<TextForm heading="TextConverter -A Word counter, character Counter, Remove extra spaces essential."  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;