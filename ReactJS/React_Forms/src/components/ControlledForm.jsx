import { useState } from "react";

export default function ControlledForm () {
const [usernameValue, setUsernameValue] = useState('');
const [passwordValue, setPasswordValue] = useState('');
const [ageValue, setAgeValue] = useState('');

const usernameChangeHandler = (e) => {
    setUsernameValue(e.target.value);
}

const resetFormHandler = () => {
    setUsernameValue('');
}

const usernameBlurHandler = () => {
    console.log('on blur');
}


const passwordChangeHandler = (e) => {
    setPasswordValue(e.target.value);
}

const passwordBlurHandler = () => {
    console.log('ON BLUR');
}

const ageChangeHandler = (e) => {
    setAgeValue(Number(e.target.value));
}

const ageBlurHandler = () => {
    console.log('On Blur');
}

console.log(usernameValue);
console.log(passwordValue);
console.log(ageValue);

    return (
        <>
            <h1>Controlled Form</h1>

            <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        name="username" 
                        id="username" 
                        value={usernameValue}
                        onChange={usernameChangeHandler}
                        onBlur={usernameBlurHandler}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        value={passwordValue}
                        onChange={passwordChangeHandler}
                        onBlur={passwordBlurHandler}
                    />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input 
                        type="number" 
                        name="age" 
                        id="age"
                        value={ageValue} 
                        onChange={ageChangeHandler}
                        onBlur={ageBlurHandler}
                    />
                </div>
                <div>
                    <button>Register</button>
                    <button type="button" onClick={resetFormHandler}>Reset</button>
                </div>

            </form>
        </>
    );
}