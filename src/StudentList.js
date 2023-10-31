import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalStudents = students.length;
  const pages = 10;
  const studentsPerPage = Math.ceil(totalStudents / pages);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/students');
        if (response.data && Array.isArray(response.data.data)) {
          setStudents(response.data.data);
        } else {
          console.error('Data received is not an array:', response.data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchStudents();
  }, []);

  const handleEdit = (studentId) => {
    console.log('Edit student with ID:', studentId);
  };

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="student-list">
    <h1>StudentList</h1>
      {currentStudents.length > 0 ? (
        <div className="card-container">
          {currentStudents.map((student) => (
            <div key={student.id} className="card">
              <p><strong>Name:</strong> {student.first_name} {student.last_name}</p>
              <p><strong>Email:</strong> {student.email}</p>
              <p><strong>Phone:</strong> {student.phone}</p>
              <button onClick={() => handleEdit(student.id)}>Edit</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No students found.</p>
      )}

      <div className="pagination">
        {[...Array(pages)].map((_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
