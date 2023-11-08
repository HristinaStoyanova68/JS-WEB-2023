export default function ControlledForm () {
    return (
        <>
            <h1>Controlled Form</h1>

            <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input type="number" name="age" id="age" />
                </div>
                <div>
                    <button>Register</button>
                    <button type="button">Reset</button>
                </div>

            </form>
        </>
    );
}