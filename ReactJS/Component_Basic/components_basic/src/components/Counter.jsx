import { useState } from "react";

export default function Counter(props) {

    const [count, setCount] = useState(0);

    const incrementClickHandler = () => {
        setCount(oldValue => oldValue + 1);
    }

    const clearCounterHandler = () => {
        setCount(0);
    }
    return (
        <div>
            <h3>Counter</h3>

            <p>Count: { count }</p>

            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={clearCounterHandler}>clear</button>
            <button onClick={incrementClickHandler}>+</button>
        </div>
    );
}