import './App.css';

function App() {

    let numbers = [1, 2, 3, 4, 5];
    let doubled = numbers.map(number => <li key={number.id}>{number * 2}</li>);
    
    console.log(doubled);

    return (
        <ul>
            {doubled}
        </ul>
    );

}

export default App
