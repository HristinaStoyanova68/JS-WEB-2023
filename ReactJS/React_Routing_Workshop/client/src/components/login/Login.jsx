import useForm from '../../hooks/useForm';

import { Link } from 'react-router-dom';

export default function Login() {
    const { values, onChange, onSubmit } = useForm({
        email: '',
        password: '',
    });

    return (
        <section id="login-page" className="auth">
            <form id="login">

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Sokka@gmail.com"
                        onChange={onChange}
                        value={values["email"]}
                    />

                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        onChange={onChange}
                        value={values["password"]}
                    />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you do not have profile click <Link to="/register">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}