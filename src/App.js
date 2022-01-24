import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [value, setValue] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (value > 0 && value % 3 === 0) {
            console.log('Fizz')
            setCount('Fizz')
            if (value > 0 && value % 5 === 0) {
                setCount("FizzBuzz")
            }
        } else if (value > 0 && value % 5 === 0) {
            setCount('Buzz')
        }
    }, [value])

    const plusHandler = () => {
        setValue(value + 1)
        setCount(value + 1)
    }
    const minusHandler = () => {
        setValue(value - 1)
        setCount(value - 1)
    }
  return (
      <div>
          <h1>{count}</h1>
          <button onClick={minusHandler}>Minus</button>
          <button onClick={plusHandler}>Plus</button>
      </div>
  );
}

export default App;
