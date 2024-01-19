import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseDetails from './Pages/CourseDetails';
import CourseList from './Pages/CourseList';
import StudentDashboard from './Pages/StudentDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path='/dashboard' element={<StudentDashboard />} />
        <Route path='/CourseDetails' element={<CourseDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
