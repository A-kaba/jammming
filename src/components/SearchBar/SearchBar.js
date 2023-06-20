import React from 'react';
import './SearchBar.css'

export const SearchBar = ()=>{
  return(
    <>
        <input placeholder='Enter a song title' className='search'/>
        <br />
        <button className='btn'>
            Search
        </button>

    
    </>
  )
}