import React, { useContext, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import '../assets/searchBar.css'
import { Context } from '../context/ContextProvider';
import { Link } from 'react-router-dom';

export const BlogSearch = () => {
  const [toggleSearchBar,setToggleSearchBar] = useState(false)
 
  const {exsistingData,setFilterPost,setSearch,search} = useContext(Context)
  
const handleSearchBar = ()=>{
  setToggleSearchBar(!toggleSearchBar)
}

const handleSearchInput = (e)=>{
  const search = e.target.value.toLowerCase()
  setSearch(search)
if(exsistingData.length > 0){
const searchFilter= exsistingData.filter((post)=> post.title.toLowerCase().includes(search))
setFilterPost(searchFilter)
console.log(searchFilter,'searchFilter')
}
}

  return (
    <div className='blogSearch-container'>
   <div className='searchNavIcon'> <Link className='searchBtn' onClick={handleSearchBar}> <FaSearch size={"20px"} className="searchBar" />  SEARCH</Link></div>
   {toggleSearchBar && ( 
   <div className='searchDropDown'>
<form action="dropdown">
  <div className='searchInputDiv'>
    <input className='searchInput' type="text" placeholder='Type to search...' value={search} onChange={handleSearchInput}/>
  </div>
</form>
   </div>
   )}
  
    
    </div>
  )
}


