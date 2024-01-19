import React, { createContext, useContext, useState } from 'react';

// Create the context
const StudentContext = createContext();

// Create a provider component
export const StudentProvider = ({ children }) => {
  const [studentData,setStudentData] = useState(); // Initial state is an empty array

  // Create a function to update the course data
  const updateStudentData = (newData) => {
    setStudentData(newData);
  };

  return (
    <StudentContext.Provider value={{ studentData, updateStudentData }}>
      {children}
    </StudentContext.Provider>
  );
};

// Create a custom hook to use the context
export const useStudentContext = () => {
  return useContext(StudentContext);
};
