import React from 'react'
import TextData from '../Utilities/Text'
import {ArrowRight, ArrowRightCircleIcon, ArrowRightIcon, Clock10, LucideCalendarClock, TimerIcon} from 'lucide-react'
function CourseCard(props) {
  
  const handleClick = ()=>{
     props.viewClick();

  }
  const handleBuyClick =()=>{
    props.buyClick();
  }
  return (
    <div className='upside bg-white p-2 flex gap-5 flex-col text-textBlue2 rounded-xl h-fit w-fit '  >
       <div className='flex flex-row gap-10 bg-textBlue2 p-4 rounded-xl'>
        <h1 className='text-xl italic text-white  '>{TextData.NavBar.BrandName}</h1>
        <p className='text-xl text-white'>{props.title}</p>
       </div>
       <h1 className='text-textBlue2 text-cneter text-md'>{props.desc}</h1>
       <div className='flex flex-row justify-between'>
        <label className='text-2xl text-textBlue2' >{props.author}</label>
        <div className={`${props.status==='Inprogress'?'bg-blue-100 text-blue-700':props.status==='closed'?'bg-red-100 text-red-700':'bg-green-100 text-green-700'} rounded-full p-2`}>{props.status}</div>
       </div>
       <div className='text-md flex flex-row items-center gap-2' ><LucideCalendarClock  />{props.duration}</div>
       <div className='text-md flex flex-row items-center gap-2' ><Clock10  />{props.schedule}</div>

       <div>
        <h3 className='bg-red-400 text-white w-fit rounded-full p-2 '>Prerequisites</h3>
        <div className='flex flex-row items-center mt-5 text-md gap-2'><ArrowRightCircleIcon /> {props.pre}</div>
       </div>
<div className='flex flex-col lg:flex-row justify-between gap-4 items-center '>
      {!props.openStatus&& <div onClick={handleClick} className='bg-white w-full rounded-xl p-3 border-gray-300 border-2 flex flex-row items-center justify-center gap-5 text-xl hover:bg-textBlue1 hover:text-white'><button>View Details</button><ArrowRightIcon /></div>}
      <div onClick={handleBuyClick} className='bg-white w-full rounded-xl p-3 border-gray-300 border-2 flex flex-row items-center justify-center gap-5 text-xl hover:bg-textBlue1 hover:text-white'><button>Buy Now</button><ArrowRightIcon /></div>
   </div>
    </div>
  )
}

export default CourseCard