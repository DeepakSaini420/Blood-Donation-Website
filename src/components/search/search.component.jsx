import { useContext } from 'react'
import { BloodDonaterProvider } from '../../context/bloodDonaters.context'
import Input from '../input/input.component'
import './search.css'

const Search = ()=>{
    const { search } = useContext(BloodDonaterProvider);
    console.log(search);
    return(
        <div className='search-bar'>
            <Input type={'text'} placeholder={'Search Number of Packets or place'} className={'search_comp'} setData={search}/>
        </div>
    )
}

export default Search