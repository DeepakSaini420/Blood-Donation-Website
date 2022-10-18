import Button from '../buttons/Button.component';
import './blood-donater.css'

const BloodDonater = ({ quantity,nameOfDoner,location,city,State })=>{
    return(
        <div className="blood-donater">
            <div>
                <h1>{quantity} Packets Of Blood</h1>
                <p>{nameOfDoner}</p>
            </div>
            <div className='lines'>
                <div className='l1'></div>
                <div className='l2'></div>
            </div>
            <div className='get-blood-div'>
                <span>{location}, {city} {State}</span>
                {
                    nameOfDoner? (
                        <Button title={"Get Blood"} name={"red-wt-button-sm"}/>
                    ):''
                }
            </div>
        </div>
    )
}

export default BloodDonater;