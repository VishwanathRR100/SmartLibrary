import React from 'react'
import { FaUser } from "react-icons/fa";
import "./topbar.css"
import Sidepanel from './Sidepanel';
const Topbar = () => {
    function ham(){
        
    }
  return (
    <div style={{
        height:"12vh",
        width:"100vw",
        backgroundColor:"goldenrod"
    }}>
        <h2>Library Management System</h2>
        <div id='ham' onClick={()=>{ham()}}> <b>{<FaUser />} Welcome admin</b>
        <div id='i'></div>
        <div id='i'></div>
        <div id='i'></div>
        </div>
        <Sidepanel />
    </div>
  )
}

export default Topbar