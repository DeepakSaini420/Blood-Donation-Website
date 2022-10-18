import { useContext } from "react"
import { UserContext } from "../../context/user.context";
import { BloodDonaterProvider } from "../../context/bloodDonaters.context"
import BloodDonater from "../../components/blood-donater/blood-donater.component";
import './info.css'

const Info = () =>{
    const { bloodDonated } = useContext(BloodDonaterProvider);
    const { user } = useContext(UserContext);
    console.log(bloodDonated);
    return(
        <div className="info">
            <h1>Blood Donated:-</h1>
            {
                bloodDonated.map((blood,idx)=>{
                    console.log(blood)
                    if(blood.email===user.email){
                        return(
                                <div className="space">
                                    <BloodDonater key={idx} quantity={blood.bloodData.quantity} location={blood.bloodData.location} city={blood.bloodData.city} State={blood.bloodData.state}/>
                                </div>
                            ) 
                    }
                })
            }
        </div>
    )
}

export default Info