import './Button.css';
export default function Button({varient,buttonText}){
    return <button class={"button-model-1 " + varient}>{buttonText}</button>
}

