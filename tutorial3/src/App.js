
import './App.css';
import Login from './Components/Login';
import Profile from './Components/Profile'
import {useState} from "react";

function App() {
    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [isLoggedIn, setIsLoggedIn] = useState("");

  return (
    <div className="App">
        {isLoggedIn ? (
      <Profile firstName={firstName} lastName={lastName} email ={email} setIsLoggedIn ={setIsLoggedIn}></Profile>
            ) : (

            <Login setfirstName={setFirstName} setlastName={setLastName}  setEmail ={setEmail} setPassword ={setPassword}  password ={password} setIsLoggedIn={setIsLoggedIn}></Login>
            )
        }

    </div>

  );
}

export default App;
