import { Fragment } from "react"
import { Link, Outlet } from "react-router-dom"
import Button from "../../components/buttons/Button.component"
import Footer from "../../components/footer/footer.component"
import logo from '../../static/Logo.png'
import './navigation.css'

const Navigation = ()=>{
    return(
        <Fragment>
            <div className="navigation">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo.png"/>
                    </Link>
                </div>
                <div className="navigation-links">
                    <div className="link">
                        <Link to="/">
                            Home
                        </Link>
                    </div>
                    <div className="link">
                        <Link to="/about">About Us</Link>
                    </div>
                    <div className="link">
                        <Link to="/contact">Contact Us</Link>
                    </div>
                    <div className="link">
                        <Link to="/campaigns">Campaigns</Link>
                    </div>
                    <div className="link">
                        <Link to="/sign-up">Sign Up</Link>
                    </div>
                </div>
            </div>
            <Outlet/>
            <div className="become-a-volunteer">
                <div>
                    <h1>
                        Best Way to Make A Difference<br/>In the Lives of Others 
                    </h1>
                    <Button title={"BECOME A VOLUNTEER"} name={"black-wt-button"}/>
                </div>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default Navigation