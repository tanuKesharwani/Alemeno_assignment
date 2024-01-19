import React, { useEffect, useState } from 'react';
import Heads from '../components/Heads';
import CourseCard from '../components/CourseCard';
import { Search } from 'lucide-react';
import axios from 'axios'
import { useCourseContext } from '../StateMangement/CourseContext';
import { useNavigate } from 'react-router-dom';
import IsLoading from '../components/IsLoading';
import { useStudentContext } from '../StateMangement/StudentContext';

function CourseList() {
  const navigate = useNavigate();
  const {updateCourseData} = useCourseContext();
  const{updateStudentData} = useStudentContext();
  const [courseData, setCourseData] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [serachdata, setSearchData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://course-details-sampleapi.onrender.com/v1/courses');
        setCourseData(response.data.courses);
        setFilteredCourses(response.data.courses); // Initialize filtered courses with all courses
        setLoading(false);
      } catch (error) {
        console.error('Error during fetch:', error);
        setLoading(false);
      }
    };

    getData();
  }, []);

  const handleViewClick = (data) => {
    updateCourseData(data);
    navigate('/CourseDetails');
  };

  const handleBuyClick = (data) => {
    updateStudentData(data);
    alert("Courses bought successfully");
    navigate('/dashboard');
  }

  const filterCourses = (searchTerm) => {
    const filtered = courseData.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  return (
    <div>
      <Heads />
      {loading ? (
        <IsLoading />
      ) : (
        <div className='relative z-1'>
          <div className='bgBlur'>
            {/* Blurred background */}
            <img
              src='https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?cs=srgb&dl=pexels-pixabay-267885.jpg&fm=jpg'
              alt='Blurred Background'
              className='bgImage'
            />
          </div>
          <div className='absolute z-5 bgText flex flex-row justify-center items-center w-full' style={{ left: '0%', top: '50%' }}>
            {/* Input field */}
            <Search className='border-2 border-r-1 rounded-l-xl border-gray-300 p-3 bg-white' size={60} />
            <input
              type='text'
              className='p-4 outline-none w-1/2 border-l-0 rounded-r-xl border-2 border-gray-300'
              value={serachdata}
              onChange={(e) => {
                setSearchData(e.target.value);
                filterCourses(e.target.value);
              }}
              placeholder=':Course / author'
            />
          </div>
        </div>
      )}

      <div className='flex flex-wrap gap-20 mt-16  justify-evenly  items-center mx-2'>
        {filteredCourses.map((data, index) => (
          <div key={index}>
            <CourseCard
              pre={data.prerequisites}
              duration={data.duration}
              desc={data.description}
              title={data.name}
              author={data.instructor}
              status={data.enrollmentStatus}
              openStatus={false}
              schedule={data.schedule}
              viewClick={() => handleViewClick(data)}
              buyClick={() => handleBuyClick(data)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;
