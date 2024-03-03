import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./Components/Home"
import Admin from "./Components/Admin";
import LoginScreen from './LoginScreen/LoginManager';
import RegisterScreen from './LoginScreen/Register/RegisterManager';
function App() {
  return (
    <div className="App">
        <Link to={"/home"}>Home</Link>
        <br></br>
        <Link to={"/login"}>Login</Link>
        <Routes>
            <Route path="/home/*" element={<Home />}/>
            <Route path="/login/*" element={<LoginScreen />}/>
            <Route path="/register/*" element={<RegisterScreen />}/>
        </Routes>

    </div>
  );
}

export default App;
