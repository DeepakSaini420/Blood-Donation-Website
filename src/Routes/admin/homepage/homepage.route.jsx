import FrontCompoonent from '../../../components/admin/frontComponent/front-component.component'
import imsrc from '../../../static/profile(2).png' 
import './homepage.css'
const Homepage = ()=>{
    return(
        <div className='homepage'>
            <FrontCompoonent imgSrc={imsrc}/>
            <FrontCompoonent imgSrc={imsrc}/>
            <FrontCompoonent imgSrc={imsrc}/>
            <FrontCompoonent imgSrc={imsrc} title={'Messages'}/>
        </div>
    )
}

export default Homepage