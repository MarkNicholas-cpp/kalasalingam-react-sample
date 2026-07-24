import './Input.css';

export default function Input(
    {name,type,placeholder,id,className,required}
){
    return <>
    <div className="group">
                <input type={type} 
                className={className} 
                name={name} 
                id={id} 
                required={required}
                placeholder={placeholder}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label for={id}>{name}</label>
            </div>
            </>
}