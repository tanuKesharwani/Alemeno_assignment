import React,{useState} from 'react'
import Heads from '../components/Heads'
import { useStudentContext } from '../StateMangement/StudentContext'
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ClipboardEditIcon, Goal, Mail, User2, WatchIcon,ChevronDown,ChevronUp,CircleDot } from 'lucide-react';

function StudentDashboard() {
 const{studentData}= useStudentContext();
  const student =studentData&& studentData.students[0];
  // console.log(student);
  const[moduleCompleted,setModuleCompleted] = useState(0);
  const [isExpand, setIsExpand] = useState(Array(studentData && studentData.syllabus.length).fill(false));
  const [markCompleted, setMarkCompleted] = useState(Array(studentData && studentData.syllabus.length).fill(false));
  const totaModule = studentData&&studentData.syllabus.length;
  const handleExpand = (index) => {
    const newExpandState = [...isExpand];
    newExpandState[index] = !newExpandState[index];
    setIsExpand(newExpandState);
  };
  const handleMarkCompleted = (index) => {
    const newExpandState = [...markCompleted];
    newExpandState[index] = true;
    setMarkCompleted(newExpandState);
    setModuleCompleted(moduleCompleted+1);
  };
  
  return (
    <div>
        <Heads />
      {studentData?(
        <>        <div className='text-textBlue2 w-full flex flex-col justify-center items-center'>
           <div className='flex  text-md lg:text-2xl flex-col lg:flex-row md:flex-row items-center gap-4 lg:gap-20 md:gap-16 mt-10 bg-blue-500 bg-opacity-25 p-4 lg:rounded-full justify-center w-fit'>
              
                <h2 className='flex flex-row items-center gap-2'><ClipboardEditIcon />Studnet Id: {student.id} </h2>
                <h2 className='flex flex-row items-center gap-2'><User2 />Name:  {student.name} </h2>
                <h2 className='flex flex-row items-center gap-2'><Mail />Studnet Id: {student.email} </h2>

                
            </div>
            <div className='flex flex-col md:flex-row lg:flex-row items-center mt-10 justify-center gap-4 lg:gap-20 md:gap-16 w-full items-cener'>
                <h2 className='flex flex-row items-center gap-3'><CheckCircle /> Complted module : {moduleCompleted}</h2>
                <h2 className='flex flex-row items-center gap-3'><WatchIcon /> Pending module : {totaModule-moduleCompleted}</h2>
                <h2 className='flex flex-row items-center gap-3'><Goal /> Progess percentage : {Math.ceil(moduleCompleted*100/totaModule)}%</h2>

            </div>
            </div>

            <div className="flex flex-col gap-4 mt-4 mx-2 lg:mx-40 md:mx-32 ">
              {studentData.syllabus.map((data, index) => (
                <div key={index}>
                  <div className="flex flex-row justify-between p-4 bg-gray-200 rounded-xl">
                  <div className='flex flex-row gap-4 items-center'>
                  <button className={`${markCompleted[index]?'bg-green-200 text-green-700 p-2 rounded-xl':'bg-red-200 text-red-700 p-2 rounded-full'}`} onClick={()=>handleMarkCompleted(index)}>{markCompleted[index]?'completed':'Mark As Completed'}</button>

                  <h2 className='text-xl font-medium'>Week {data.week}</h2>
                  </div>
                <button onClick={() => handleExpand(index)}>{isExpand[index]?<ChevronUp />:<ChevronDown />}</button>
                  </div>
                  {isExpand[index] && (
                    <div className="bg-gray-100 upside ml-10 p-4 rounded-xl">
                      {/* Content for the expanded week goes here */}
                      <h2 className="text-xl">{data.topic}</h2>
                      <div className="flex flex-row items-center gap-2 mt-2"><CircleDot /> {data.content}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          
     
        

        </>

      ):<div className='w-full flex flex-row justify-center items-center'>
        <div className='mt-10 bg-white w-fit p-4 text-textBlue2 text-center'>
          <h2 className='text-2xl'>Not Any Course bought Click below to check out the courses</h2>
          <Link to='/' className='flex flex-row items-center justify-center gap-3 border-2 p-2 mt-5 border-gray-300 w-fit hover:bg-textBlue2 hover:text-white'><button className=' '>Click to check courses</button><ArrowRight /></Link>
        </div>
      </div>}
    </div>
  )
}

export default StudentDashboard