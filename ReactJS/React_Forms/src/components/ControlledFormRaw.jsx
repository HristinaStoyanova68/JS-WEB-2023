import { useState } from "react";
import styles from './ControlledFormRaw.module.css'


const formInitialState = {
    username: '',
    password: '',
    age: '',
    gender: 'm',
    swimming: false,
    shopping: false,
    knitting: false,

};

export default function ControlledFormRaw () {
const [formValues, setFormValues] = useState(formInitialState);
const [errors, setErrors] = useState({});


const changeHandler = (e) => {
    let value = '';

    switch (e.target.type) {
        case 'number':
            value = Number(e.target.value);
            break;
        case 'checkbox':
            value = e.target.checked;
            break;
        default:
            value = e.target.value;
            break;
    }

    setFormValues(state => ({
        ...state,
        [e.target.name]: value,
    }));
}

const resetFormHandler = () => {
    setFormValues(formInitialState);
    setErrors({});
};

const submitHandler = () => {
    
    // console.log(formValues);
    resetFormHandler();
};

const ageValidator = () => {

    if (formValues.age < 0 || formValues.age > 120) {
        setErrors(state => ({
            ...state,
            age:'Age should be between 0 and 120',
        }));
    } else {
        if (errors.age) {
            setErrors(state => ({
                ...state,
                age: '',
            }));
        }
    }
}

// const onCheckboxChange = (e) => {
//     setFormValues(state => ({
//         ...state,
//         [e.target.name]: [e.target.checked]
//     }));
// }
// console.log(formValues);

    return (
        <>
            <h1>Controlled Form</h1>

            {/* <form onSubmit={submitHandler}> */}
            <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        name="username" 
                        id="username" 
                        value={formValues.username}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        value={formValues.password}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input 
                        type="number" 
                        name="age" 
                        id="age"
                        value={formValues.age} 
                        onChange={changeHandler}
                        onBlur={ageValidator}
                        className={errors.age && styles.inputError}
                    />
                    {errors.age && (
                        <p className={styles.errorMessage}>{errors.age}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="gender">Gender</label>
                    <select name="gender" id="gender" value={formValues.gender} onChange={changeHandler}>
                        <option value="m">M</option>
                        <option value="f">F</option>
                    </select>
                </div>

                <div>
                    <h3>Hobbies</h3>
                    <label htmlFor="swimming">Swimming</label>
                    <input type="checkbox" name="swimming" id="swimming" checked={formValues.swimming} onChange={changeHandler}/>
                    <label htmlFor="shopping">Shopping</label>
                    <input type="checkbox" name="shopping" id="shopping" checked={formValues.shopping} onChange={changeHandler}/>
                    <label htmlFor="knitting">Knitting</label>
                    <input type="checkbox" name="knitting" id="knitting" checked={formValues.knitting} onChange={changeHandler}/>
                </div>

                <div>
                    <button type="button" disabled={Object.values(errors).some(x => x)} onClick={submitHandler}>Register</button>
                    <button type="button" onClick={resetFormHandler}>Reset</button>
                </div>

            </form>
        </>
    );
}