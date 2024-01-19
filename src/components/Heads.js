import React, { useEffect, useState } from 'react'
import TextData from '../Utilities/Text'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
function Heads() {
 const location = useLocation();
 const [active,SetIsActive] = useState(0);
 useEffect(()=>{
  if(location.pathname==='/dashboard')
  {
    SetIsActive(1);
  }
  else if(location.pathname ==='/CourseDetails')
  {
    SetIsActive(2);
  }
 },[location]);
  return (
    <div className='bg-white flex flex-col gap-4 md:flex-col lg:flex-row justify-between items-center p-4 upside  w-full'>
        <div className='text-4xl font-bold text-textBlue2'>
            {TextData.NavBar.BrandName}
        </div>
        <div className='flex flex-row gap-4  text-textBlue2'>
            <Link to='/dashboard' className={`${active===1?'underline font-medium':''} hover:underline`}>{TextData.NavBar.navMiddleElement1}</Link>
            <Link to='/' className={`${active===0?'underline font-medium':''} hover:underline`}>{TextData.NavBar.navMiddleElement2}</Link>

            {/* <Link to='/Coursedetails' className={`${active===2?'underline font-medium':''} hover:underline`}>{TextData.NavBar.navMiddleElement3}</Link> */}

        </div>
    </div>
  )
}

export default Heads