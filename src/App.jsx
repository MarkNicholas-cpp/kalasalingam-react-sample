import './App.css';
import Input from './Input.jsx';
import Button from './Button.jsx';
export default function App(){
  return <>
  <h1>This is the Heading</h1>
    <Input 
    name="name"
    type="text"
    placeholder="Enter name"
    id="form-name"
    className="form-input"
    required={false}
    />
  </>
}; 