import {useState} from "react";

function Login(props) {
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const handleFirstNameChange = (e) =>{

        const nameRegex = /^[a-zA-Z]+$/;
        if(!nameRegex.test(e.target.value) && e.target.value){
            setFirstNameError('Invalid first name. Accepting only letters!')
        }
        else {
            setFirstNameError("");
            props.setfirstName(e.target.value);
        }
    }
    const handleLastNameChange = (e) =>{

        const nameRegex = /^[a-zA-Z]+$/;
        if(!nameRegex.test(e.target.value) && e.target.value){
            setLastNameError('Invalid last name. Accepting only letters!')
        }
        else {
            setLastNameError("");
            props.setlastName(e.target.value);
        }
    }

    const handleEmailChange = (e) =>{

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if(!emailRegex.test(e.target.value) && e.target.value){
            setEmailError("Invalid email!!")
        }
        else {
            setEmailError("");
            props.setEmail(e.target.value);
        }
    }
    const handlePasswordChange = (e) =>{

        const passwordRegex = /^(?=.*[a-zA-Z0-9@#$%^&+=])[a-zA-Z0-9@#$%^&+=]{8,}$/;
        if(!passwordRegex.test(e.target.value) && e.target.value){
            setPasswordError('Accepting only alpha-numeric and special characters. Minimum limit is 8 characters.')
        }
        else {
            setPasswordError("");
            props.setPassword(e.target.value);
        }
    }
    const handleConfirmPasswordChange = (e) => {
        const confirmedPassword = e.target.value;
        setConfirmPassword(confirmedPassword);
        if (confirmedPassword !== props.password) {
            setConfirmPassword("Passwords do not match.");
        } else {
            setConfirmPassword("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            firstNameError.length > 0 ||
            lastNameError.length > 0 ||
            emailError.length > 0 ||
            passwordError.length > 0 ||
            confirmPassword.length > 0
        ) {
            alert("Please enter valid fields");
        } else {
            props.setIsLoggedIn(true);
            alert("Form has been successfully submitted");
        }
    };


    return (
        <div>
            <form>

                <h2>Login</h2>
                <label>First Name:  </label>
                <input type="text" name="firstname" onChange={handleFirstNameChange}></input>
                {firstNameError.length>0 ? (
                    <h6 style ={{color:"red"}}>{firstNameError} </h6>) :null}
                <br/>
                <label>Last Name: </label>
                <input type="text" name="lastname" onChange={handleLastNameChange }></input>
                {lastNameError.length>0 ? (
                    <h6 style ={{color:"red"}}>{lastNameError} </h6>) :null}
                <br/>
                <label>  Email ID:   </label>
                <input type="text" name="email" onChange={handleEmailChange }></input>
                {emailError.length>0 ? (
                    <h6 style ={{color:"red"}}>{emailError} </h6>) :null}
                <br/>
                <label>Password: </label>
                <input type="password" name="password" onChange={handlePasswordChange }></input>
                {passwordError.length>0 ? (
                    <h6 style ={{color:"red"}}>{passwordError} </h6>) :null}
                <br/>
                <label>Password: </label>
                <input type="password" name="confirmpassword" onChange={handleConfirmPasswordChange }></input>
                {confirmPassword.length>0 ? (
                    <h6 style ={{color:"red"}}>{confirmPassword} </h6>) :null}
                <br/>
                <button  type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>

    );
}

export default Login;