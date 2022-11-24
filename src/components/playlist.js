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
<div>
<i><FaList className='list'/></i>
</div>
<span></span><p>{name}</p>
<div>
<i><FaTrash className='Trash'/></i>
</div>
</div>
    })
}
</div>
    </div>
  )
}
