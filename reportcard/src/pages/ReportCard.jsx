import React from 'react'
import { useParams, Link } from 'react-router-dom'
import students from '../data/students'

function ReportCard() {
  const { id } = useParams()
  const student = students.find((s) => s.id === parseInt(id))

  if (!student) {
    return (
      <div className="page">
        <h2>Student Not Found</h2>
        <Link to="/students">Back to Students</Link>
      </div>
    )
  }

  const total = student.tamil + student.english + student.maths + student.science + student.social
  const average = total / 5

  let grade = 'D'
  if (average >= 90) {
    grade = 'A+'
  } else if (average >= 80) {
    grade = 'A'
  } else if (average >= 70) {
    grade = 'B'
  } else if (average >= 60) {
    grade = 'C'
  }

  const result = average >= 40 ? 'PASS' : 'FAIL'

  return (
    <div className="page report">
      <h2>Student Report Card</h2>
      <h3>{student.name}</h3>
      <p>Roll Number: {student.rollNo}</p>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tamil</td>
            <td>{student.tamil}</td>
          </tr>
          <tr>
            <td>English</td>
            <td>{student.english}</td>
          </tr>
          <tr>
            <td>Mathematics</td>
            <td>{student.maths}</td>
          </tr>
          <tr>
            <td>Science</td>
            <td>{student.science}</td>
          </tr>
          <tr>
            <td>Social</td>
            <td>{student.social}</td>
          </tr>
        </tbody>
      </table>
      <div style={{ marginTop: '20px' }}>
        <p><strong>Total:</strong> {total} / 500</p>
        <p><strong>Average:</strong> {average.toFixed(2)}%</p>
        <p><strong>Grade:</strong> {grade}</p>
        <p><strong>Result:</strong> {result}</p>
      </div>
      <Link to="/students">Back to Students</Link>
    </div>
  )
}

export default ReportCard
