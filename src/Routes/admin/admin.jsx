import { useContext } from "react"
import { Route,Routes,useNavigate } from "react-router-dom"
import { UserContext } from "../../context/user.context"
import AdminNavigation from "./admin-navigation/admin-navigation.router"
import Homepage from "./homepage/homepage.route"

const Admin = () =>{

    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    if(!user.isAdmin){
        navigate('/');
    }

    return(
        <Routes>
            <Route path="/" element={<AdminNavigation/>}>
                <Route index element={<Homepage/>} />
            </Route>
        </Routes>
    )
}

export default Admin