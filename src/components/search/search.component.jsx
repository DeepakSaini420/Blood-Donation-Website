import { useContext,useEffect, useState } from 'react'
import { BloodDonaterProvider } from '../../context/bloodDonaters.context'
import Input from '../input/input.component'
import './search.css'

const Search = ()=>{
    const { search } = useContext(BloodDonaterProvider);
    const [value,setValue] = useState('');
    
    useEffect(()=>{
        search(value);
    },[value])

    console.log(value);
    return(
        <div className='search-bar'>
            <Input type={'text'} placeholder={'Search Number of Packets or place'} className={'search_comp'} setData={setValue}/>
        </div>
    )
}

export default Search