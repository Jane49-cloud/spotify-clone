import React from 'react'
import {FaSpotify, FaSearch}from 'react-icons/fa'
import{FiMoreHorizontal}from 'react-icons/fi'
import MenuList from './menuList'
import { Playlist } from './playlist'
import { TrackList } from './tracklist'

export const LeftMenu= (props) => {
  return (
    <div className='left-menu'>      
        <div className="logo-container">
        <div className="icons">
            <FaSpotify/><span>spotify</span>
        </div>
        <div className="continue">
        <button className='more-btn'><FiMoreHorizontal/></button>
        </div>        
       </div>
       <form action="">
            <input type="text" placeholder={ `    Search...`  } id='search'/>
            <i className='search'><FaSearch/></i>
        </form>
        <MenuList/>
        <Playlist/>
        <TrackList/>
        </div>
    
  )
}


