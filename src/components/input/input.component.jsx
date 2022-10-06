import './input.css'

const Input = ({type,placeholder,className})=>{
    return(
        <input type={type} required className={`input_text ${className}`} placeholder={placeholder}/>
    )
}

export default Input