import React, { Fragment, useState } from "react";
import Heads from "../components/Heads";
import { useCourseContext } from "../StateMangement/CourseContext";
import CourseCard from "../components/CourseCard";
import { ArrowRight, ChevronDown, ChevronUp, CircleDot, ClockIcon } from "lucide-react";
import { useStudentContext } from "../StateMangement/StudentContext";
import { Link, useNavigate } from "react-router-dom";

function CourseDetails() {
  const navigate = useNavigate();
  const { courseData } = useCourseContext();
  const{updateStudentData}=useStudentContext();
  const dataArray = [];
  dataArray.push(courseData);

  const [isExpand, setIsExpand] = useState(Array(courseData&&courseData.syllabus.length).fill(false));

  const handleExpand = (index) => {
    const newExpandState = [...isExpand];
    newExpandState[index] = !newExpandState[index];
    setIsExpand(newExpandState);
  };
  const handleBuyClick = (data)=>
  {
    updateStudentData(data);
       navigate('/dashboard');
  }
  return (
    <div>
      <Heads />
      {courseData?(<>
      <div className="flex flex-col md:flex-row text-textBlue2  lg:flex-row justify-between gap-20  items-center mt-20 w-full ">
        <div className="bg-white p-4 w-full mx-5 h-fit lg:w-5/6 upside rounded-xl">
          {/* Your content for the left side */}
          <div className="flex flex-row justify-between items-center p-2">
            <div>
              <h1 className="text-3xl font-medium">{courseData.name}</h1>
              <p className="text-lg mt-2">{courseData.description}</p>
            </div>
            <div>
              <div
                className={`${
                  courseData.enrollmentStatus === "Inprogress"
                    ? "bg-blue-100 text-blue-700"
                    : courseData.enrollmentStatus === "closed"
                    ? "bg-red-100 text-red-700"
                    : "bg-green-100 text-green-700"
                } rounded-full p-2 flex flex-row items-center justify-center`}
              >
                {courseData.enrollmentStatus}
              </div>

              <div className="flex flex-row gap-2 mt-4">
                <ClockIcon /> {courseData.duration}
              </div>
            </div>
          </div>
          <div className="bg-textBlue1 mt-4" style={{ height: "1px" }}></div>
          <div>
            <h1 className="text-xl mt-4 font-medium">Course Content</h1>
            <div className="flex flex-col gap-4 mt-4">
              {courseData.syllabus.map((data, index) => (
                <div key={index}>
                  <div className="flex flex-row justify-between p-4 bg-gray-200 rounded-xl">
                  <h2>Week {data.week}</h2>
                <button onClick={() => handleExpand(index)}>{isExpand[index]?<ChevronUp />:<ChevronDown />}</button>
                
                  </div>
                  {isExpand[index] && (
                    <div className="bg-white upside ml-10 p-4 rounded-xl">
                      {/* Content for the expanded week goes here */}
                      <h2 className="text-xl">{data.topic}</h2>
                      <div className="flex flex-row items-center gap-2 mt-2"><CircleDot /> {data.content}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mx-0 lg:mx-10 md:mx-8">
          {dataArray.map((data, index) => (
            <CourseCard
              key={index}
              pre={data.prerequisites}
              duration={data.duration}
              desc={data.description}
              title={data.name}
              author={data.instructor}
              status={data.enrollmentStatus}
              openStatus={true}
              buyClick ={()=>handleBuyClick(data)}
            />
          ))}
        </div>
      </div></>):(<>
        <div className='w-full flex flex-row justify-center items-center'>
        <div className='mt-10 bg-white w-fit p-4 text-textBlue2 text-center'>
          <h2 className='text-2xl'>Not Any Course bought Click below to check out the courses</h2>
          <Link to='/' className='flex flex-row items-center justify-center gap-3 border-2 p-2 mt-5 border-gray-300 w-fit hover:bg-textBlue2 hover:text-white'><button className=' '>Click to check courses</button><ArrowRight /></Link>
        </div>
      </div>
      </>)}
    </div>
  );
}

export default CourseDetails;
