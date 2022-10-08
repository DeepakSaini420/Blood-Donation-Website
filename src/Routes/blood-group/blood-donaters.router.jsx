import { useParams } from 'react-router-dom'
import { bloods } from '../../utils/dummy'
import BloodDonater from "../../components/blood-donater/blood-donater.component"
import './blood-dontaers.css'

const BloodDonaters = () =>{
    let { id } = useParams();
    return(
        <div className="BloodDonaters">
            {
                bloods.map(({ idx,quantity,nameOfDoner,bloodGroup,location,city,state })=>{
                    console.log(id,bloodGroup);
                    if(bloodGroup === id){
                        return <BloodDonater key={idx} nameOfDoner={nameOfDoner} quantity={quantity} location={location} city={city} State={state} />
                    }
                    return ''
                })
            }
        </div>
    )
}

export default BloodDonaters