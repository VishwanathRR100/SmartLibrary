import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { GrHome } from "react-icons/gr";
import { SiBookstack } from "react-icons/si";
import { PiStudent } from "react-icons/pi";
import { IoBookSharp } from "react-icons/io5"
const Sidepanel = () => {
  return (
    <div style={{
        fontSize:"18px",
        textAlign:"center",
        backgroundColor:"goldenrod",
        width:"17vw",
        height:"100vh",
        boxShadow:"2px",
    }} id='sidepanel'>
        <br />
        <Link to ="/" style={{textDecoration:"none"}}><FaHome /> Homepage</Link> <br /><br />
        <Link to ="/" style={{textDecoration:"none"}}><GrHome /> EMS Dashboard</Link> <br /><br />
        <h3>Features</h3>
        <Link to ="/manage" style={{textDecoration:"none"}}><PiStudent /> Manage Students</Link> <br /><br />
        <Link to ="/" style={{textDecoration:"none"}}><IoBookSharp /> Issue Book</Link> <br /><br />
        <Link to ="/" style={{textDecoration:"none"}}><SiBookstack /> Return Book</Link> <br /><br />
        <Link to ="/" style={{textDecoration:"none"}}>View Records</Link> <br /><br />
        <Link to ="/" style={{textDecoration:"none"}}>Defaulters List</Link> <br /><br />
        <Link to ="/" style={{textDecoration:"none"}}>Logout</Link>
    </div>
  )
}

export default Sidepanel