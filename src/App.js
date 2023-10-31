
import './App.css';

import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import StudentList from './StudentList';
import AddStudent from './AddStudent';
import Courses from './Courses';
import NavBar from './NavBar';
function App() {
  return (

       <Router>
      <div className="App">
        <NavBar />
        <div className="page-content">
          <Routes>
          <Route path="/students" element={<StudentList />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/courses" element={<Courses />} />
          </Routes>
        </div>
      </div>
    </Router>
   
  );
}

export default App;
