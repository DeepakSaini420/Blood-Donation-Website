import './front-component.css'

const FrontCompoonent = ({ imgSrc,title })=>{

    const styles = {
        width: '35%',
        height: '18rem',
        borderRadius: '9px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('${imgSrc}')`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        cursor:'pointer',
        border: '1px solid black',
        color:'red',
        marginTop:'1.2rem !important'
    }

    return(
        <div style={styles}>
            <h1>{title}</h1>
        </div>
    )
}

export default FrontCompoonent