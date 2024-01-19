import React, { createContext, useContext, useState } from 'react';

// Create the context
const CourseContext = createContext();

// Create a provider component
export const CourseProvider = ({ children }) => {
  const [courseData, setCourseData] = useState(); // Initial state is an empty array

  // Create a function to update the course data
  const updateCourseData = (newData) => {
    setCourseData(newData);
  };

  return (
    <CourseContext.Provider value={{ courseData, updateCourseData }}>
      {children}
    </CourseContext.Provider>
  );
};

// Create a custom hook to use the context
export const useCourseContext = () => {
  return useContext(CourseContext);
};
