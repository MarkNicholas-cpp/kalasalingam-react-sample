import './App.css';
import { useState } from 'react';
export default function App(){
  const [counter,setCounter] = useState(0);
  return <>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni illo neque ad ut fugiat assumenda eligendi consectetur aut, sit ex nisi cumque impedit praesentium veniam amet deleniti, voluptatum nostrum quod?
  Voluptatibus mollitia nostrum optio exercitationem iusto perferendis veniam inventore ab, quas rerum. In deserunt libero, impedit laborum similique suscipit tempore pariatur adipisci, dolorum, culpa ipsum quis. Eum fugit ullam tenetur?</p>
  {/* Events in react */}
    <button onClick={() => { 
      setCounter(counter + 1);
    }}>+</button>

    <button onClick={() => console.log(counter)}>{counter}</button>

    <button onClick={() => { 
      setCounter(counter - 1);
    }}>-</button>
  </>
}; 