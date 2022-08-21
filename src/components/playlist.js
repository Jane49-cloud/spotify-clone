import React from 'react'
import {FaPlus, FaList, FaTrash} from 'react-icons/fa'
import { playList } from './data'


export const Playlist = (props) => {
  return (
    <div className='playlistContainer'><br />
<div className="name-container">
<p>Playlist</p>
<i> <FaPlus/></i>
</div>
<div className="playlistScroll">
{
    playList.map((item)=>{
const{name, id} = item
return <div id='playlist' key={id}>
<i><FaList className='list'/></i>
<p>{name}</p>
<i><FaTrash className='Trash'/></i>
</div>
    })
}
</div>
    </div>
  )
}
