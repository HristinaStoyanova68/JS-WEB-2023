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
    // let warning = null;

    // if (count < 0) {
    //     warning = <p>Invalid Counter</p>
    // }
    let message = null;

    switch (count) {
        case 1:
            message = 'One'
            break;
        case 2:
            message = 'Two'
            break;
        case 3:
            message = 'Three'
            break;
        case 4:
            message = 'Four'
            break;
        case 5:
            message = 'Five'
            break;
        default:
            message = 'Keep Going'
            break;
    }

    return (
        <div>
            <h3>Counter</h3>

            {/* {warning} */}

            {/* use ternary operator: */}
            {count < 0
                ? <p>Invalid Counter</p>
                : <p>Valid counter</p>
            }

            {/* use boolean operators */}
            {count == 0 && <p>Please start Incrementing</p>}

            <h4>{message}</h4>

            <p>Count: {count}</p>

            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={clearCounterHandler}>clear</button>
            <button onClick={incrementClickHandler}>+</button>
        </div>
    );
}