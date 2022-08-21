import React from 'react'
import { links } from './data'

 const MenuList = (props) => {
  return (
    <div className='links'>
        {links.map((link)=>{
const {id, icon, name} = link
return <button key={id} className='btn-icon'>
 <a href="#">
    {icon}
  <span>  {name}</span>
 </a>
</button> 
        })}
    </div>
  )
}
export default MenuList