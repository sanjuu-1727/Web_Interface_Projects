import React, { useState } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState([
    { name: "Joe", present: true },
    { name: "Jaan", present: true },
    { name: "Nethra", present: true },
    { name: "Kavya", present: false },
    { name: "Sanjana", present: false }
  ]);
  const [newStudentName, setNewStudentName] = useState('');

  const total = students.length;
  const presentCount = students.filter((s) => s.present).length;
  const absentCount = total - presentCount;
  const pct = total === 0 ? "0.00" : ((presentCount / total) * 100).toFixed(2);

  const toggleAttendance = (index) => {
    setStudents((prev) =>
      prev.map((student, i) =>
        i === index ? { ...student, present: !student.present } : student
      )
    );
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    const trimmed = newStudentName.trim();
    if (trimmed !== '') {
      setStudents((prev) => [...prev, { name: trimmed, present: false }]);
      setNewStudentName('');
    }
  };

  return (
    <div className="wrap">
      <h1>Attendance Tracker</h1>
      <form className="add-row" onSubmit={handleAddStudent}>
        <input
          type="text"
          placeholder="Enter student name"
          value={newStudentName}
          onChange={(e) => setNewStudentName(e.target.value)}
        />
        <button type="submit">Add Student</button>
      </form>
      <div className="stats">
        <span>Total: {total}</span>
        <span>Present: {presentCount}</span>
        <span>Absent: {absentCount}</span>
        <span>Attendance: {pct}%</span>
      </div>
      <div className="list">
        {students.map((s, i) => (
          <div className="row" key={i}>
            <span className="name">{s.name}</span>
            <span className="status">
              Status: {s.present ? 'Present' : 'Absent'}
            </span>
            <button onClick={() => toggleAttendance(i)}>
              {s.present ? 'Mark Absent' : 'Mark Present'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
