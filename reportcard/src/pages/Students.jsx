import React from 'react'
import { Link } from 'react-router-dom'
import students from '../data/students'

function Students() {
  return (
    <div className="page">
      <h2>Student List</h2>
      <div className="student-list">
        {students.map((student) => (
          <div key={student.id} className="student-card">
            <h3>{student.name}</h3>
            <p>Roll No : {student.rollNo}</p>
            <Link to={`/report/${student.id}`}>View Report</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Students
