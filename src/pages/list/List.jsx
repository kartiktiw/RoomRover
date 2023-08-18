import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import "./list.css"
import { format } from "date-fns";
import { useLocation } from 'react-router-dom'
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';


const List = () => {
  const location =useLocation();
  const [destination,setDestination]=useState(location.state.destination);
  const [date,setDate]=useState(location.state.date);
  const [options,setOptions]=useState(location.state.options);
  const [openDate,setOpenDate]=useState(false);


  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='lsTitle'>Search</h1>
            <div className='lsItem'>
              <label>Destination</label>
              <input type='text' placeholder={destination}/>
            </div>
            <div className='lsItem'>
              <label>Check-in Date</label>
              <span onClick={()=> setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} 
              to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              { openDate && (<DateRange onChange={(item)=>setDate([item.selection])}
              minDate={new Date()}
              ranges={date}/>)}
            </div>
            <div className='lsItem'>
              <label>Options</label>
              <div className='lsOptions'>
              <div className='lsOptionItem'>
                <span className ="lsOptionText">
                  Min price <small>per night</small></span>
                  <input className='lsOptionInput' type='number'/>
                
              </div>
              <div className='lsOptionItem'>
                <span className ="lsOptionText">
                  Max price <small>per night</small></span>
                  <input className='lsOptionInput'
                  type='number'
                  />
                
              </div>
              <div className='lsOptionItem'>
                <span className ="lsOptionText">Adult</span>
                  <input className='lsOptionInput'
                  min={1} type='number' 
                  placeholder={options.adult}/>
                
              </div>
              <div className='lsOptionItem'>
                <span className ="lsOptionText">Children</span>
                  <input className='lsOptionInput'
                  min={0}
                  type='number'
                  placeholder={options.children}
                  />
                
              </div>
              <div className='lsOptionItem'>
                <span className ="lsOptionText">Room</span>
                  <input className='lsOptionInput'
                  min={1}
                    type='number'
                    placeholder={options.room}
                    />
                
              </div>
            </div>
            </div>
            <button>Search</button>
          </div>
          <div className='listResult'>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default List;
