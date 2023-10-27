import { useState } from "react";

export default function Counter(props) {

    const [count, setCount] = useState(0);

    const incrementClickHandler = () => {
        setCount(oldValue => oldValue + 1);
    }

    const clearCounterHandler = () => {
        setCount(0);
    }

    //use Return Conditional rendering
    // if (count < 0) {
    //     return (
    //         <h3>Invalid Counter</h3>
    //     );
    // }

    //Use Operators like if Conditional Rendering
    let warning = null;

    if (count < 0) {
        warning = <p>Invalid Counter</p>
    }

    return (
        <div>
            <h3>Counter</h3>

            {warning}

            <p>Count: { count }</p>

            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={clearCounterHandler}>clear</button>
            <button onClick={incrementClickHandler}>+</button>
        </div>
    );
}