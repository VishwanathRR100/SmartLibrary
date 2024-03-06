import React, { useState } from 'react'
import Sidepanel from './Sidepanel'
import './homepage.css'

const Homepage = () => {
    const [student,setStudent] = useState([
        {
            id:0,
            name:"Roshan",
            course:"BE",
            branch:"CSE"
        },
        {
            id:1,
            name:"Vishwa",
            course:"BE",
            branch:"CSE"
        },
        {
            id:2,
            name:"ABC",
            course:"BE",
            branch:"CSE"
        }
    ])
    const [books,setBooks] = useState([
        {
            id:0,
            name:"Data Structure",
            author:"Roshan",
            quantity:4
        },
        {
            id:1,
            name:"Algorithms",
            author:"ABC",
            quantity:2
        },
        {
            id:2,
            name:"Javascript in Tamil",
            author:"XYZ",
            quantity:3
        }
    ])
  const { booksCount, setBooksCount } = useState(0)
  const {studentCount,setStudentCount} = useState(0)
  // let bookno = books.length
  // setBooksCount(bookno)
  return (
    <div className='Homepage'>
      <div id="number">
        <b>No. of Students : </b>
        <b>{student.length}</b> &nbsp; &nbsp;
        <b>No. of Books : </b>
        <b>{books.length}</b>
      </div>
        <h3>Student Details</h3>
        <table id='table'>
            <thead>
            <tr>
                <th>Student_id</th>
                <th>Name</th>
                <th>course</th>
                <th>Branch</th>
            </tr>
            </thead>
        {
            student.map((val)=>(
                <tbody>
                <tr>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.course}</td>
                <td>{val.branch}</td>
                </tr>
                </tbody>
            ))
        }
        </table>
        <h3>Books Details</h3>
        <table id='table'>
            <thead>
            <tr>
                <th>Book_id</th>
                <th>Book_Name</th>
                <th>Author</th>
                <th>Quantity</th>
            </tr>
            </thead>
        {
            books.map((val)=>(
                <tbody>
                <tr>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.author}</td>
                <td>{val.quantity}</td>
                </tr>
                </tbody>
            ))
        }
      </table>
    </div>
  )
}

export default Homepage