import './Button.css'

const Button = ({name,title})=>{
    const classNames = {
        'black-wt-button':'black-wt-button',
        'black-wt-button-sm':'black-wt-button-sm',
        'red-wt-button':'red-wt-button',
        'red-wt-button-sm':'red-wt-button-sm',
    }
    return(
        <button className={classNames[name]}>
            {title}
        </button>
    )
}

export default Button