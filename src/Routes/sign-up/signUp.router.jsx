import { useState,useContext } from 'react'
import { UserContext } from '../../context/user.context'
import Button from "../../components/buttons/Button.component"
import Input from "../../components/input/input.component"
import './signUp.css'

const SignUp = ()=>{

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const { setUser ,user} = useContext(UserContext);

    const login = ()=>{
        const userComp={email,password,isAdmin:false};
        setUser(userComp);
    }

    return(
        <div className="signup">
            <h1>CREATE AN ACCOUNT</h1>
            <div className="text">
                <Input className={'input_text'} placeholder={"Email"} setData={setEmail}/>
            </div>
            <div className="text">
                <Input className={'input_text'} placeholder={"Password"} setData={setPassword}/>
            </div>
            <div className="btn">
                <Button title={"SIGN UP"} name={'black-wt-button-sm'} customClickEvent={login} setUser={setUser} email={email} password={password} user={user}/>
            </div>
            <div className="btn">
                <Button title={"LOGIN IN"} name={'black-wt-button-sm'}/>
            </div>
            <div className="btn">
                <Button title={"ADMIN LOGIN"} name={'red-wt-button'} />
            </div>
        </div>
    )
}

export default SignUp