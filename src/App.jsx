import './App.css';
export default function App(){
  let counter = 0;
  return <>
  {/* Events in react */}
    <button onClick={() => { 
      counter+=1;
    }}>+</button>
    
    <button onClick={() => console.log(counter)}>{counter}</button>

    <button onClick={() => { 
      counter-=1;
    }}>-</button>
  </>
}; 