import React from 'react'
import {FaVolumeUp, FaDesktop} from 'react-icons/fa'
import {BsMusicNote,} from 'react-icons/bs'
import Track from '../images/track1.jfif'


export const TrackList = (props) => {
  return (
    <div className='tracklist'>
       <div className="top">
   <img src={Track}alt="" />
   <p>Sample <span>Artist</span></p>
       </div>
       <div className="bottom">
        <i><FaVolumeUp/></i>
        <input type="range" />
        <i><BsMusicNote/></i>
        <i><FaDesktop/></i>
       </div>
        </div>
  )
}

