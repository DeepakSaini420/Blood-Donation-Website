import { Fragment } from "react"
import BloodGroupCard from "../../components/blood-group-card/blood-group-card.component"
import FrontImage from "../../components/frontImage/frontImage.component"
import { bloodGroups } from "../../utils/dummy"
import './blood.css'


const BloodRouter = ()=>{
    return(
        <Fragment>
            <FrontImage title={"Bloods"}/>
            <div className="blood-groups">
                {
                    bloodGroups.map(({bloodGroup,id})=> <BloodGroupCard key={id} bloodGroup={bloodGroup}/>)
                }
            </div>
        </Fragment>
    )
}

export default BloodRouter