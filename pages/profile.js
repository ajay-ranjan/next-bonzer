import { EmailRounded, LocationOnRounded, PhoneAndroidRounded, PublicOutlined } from '@mui/icons-material';
import { useRouter } from 'next/router';
import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import UploadFile from '../components/features/UploadFile';
import authContext from '../context/authContext';
import AuthRoute from '../features/AuthRoute';

const profile = () => {
 
  return (
      // <AuthRoute>
    <div className='w-full flex flex-wrap justify-center'>
      <div className='w-full sm:w-2/3  shadow-2xl bg-blue-700 rounded-tr-3xl rounded-bl-3xl'>
        <h3 className='text-xl w-full text-blue-100 font-bold p-5 '>Profile</h3>
        <div className='w-full flex flex-wrap'>
          <div  className=" w-full p-4 sm:w-1/3  bg-blue-300 text-blue-800 p-5 rounded-bl-full">
            <div className='w-full h-full flex flex-col items-center'>
              <div className=' '>
              {" "}
              <img src='https://lh3.googleusercontent.com/ogw/AAEL6si_YmpmiB5nrzYkQXek-Bad9CXsGKgr0ZyJCUmD5Q=s32-c-mo' alt='Profile Image' className='w-48 rounded-full border-solid border-2 border-green-600 m-2'
               />
               <div className='w-full text-center'>
                <UploadFile />
              <span className=' text-lg font-extrabold'>{" Akanksha Sharma "}</span>
               </div>
              </div>
            </div>
          </div>
          <div className=" w-full p-4 sm:w-2/3  bg-blue-500 text-gray-200">
            <div className="flex my-4">
              <label className=" w-full flex "> 
                <span className='w-1/3 flex font-bold'> 
                  {/* <LocationOnRounded className="bg-blue-500 rounded-full text-blue-100 p-2 text-3xl" /> */}
                Address
                </span>
                <span className='w-2/3'>
                  GF-01, New Industrial area Noida - 201301
                </span>
              </label>
              <p></p>
            </div>
            <div className="flex my-4 ">
              <label className=" w-full flex flex-wrap "> 
                <span className='w-1/3 flex font-bold'> 
                  {/* <h1 className="bg-blue-500 rounded-full text-blue-100 p-2 text-3xl w-8" >{" "}</h1> */}
                  Phone
                </span>
              <a href="tel:+91-01234567890"> +91-01234567890</a>
              </label>
            </div>
            <div className="flex my-4 ">
              <label className=" w-full flex flex-wrap "> 
                <span className='w-1/3 flex font-bold'> 
                  {/* <h1 className="bg-blue-500 rounded-full text-blue-100 p-2 text-3xl w-8" >{" "}</h1> */}
                  Email
                </span>
              <a href="mailto:test@test.com"> test@test.com</a>
              </label>
            </div>
            <div className="flex my-4 ">
              <label className=" w-full flex flex-wrap "> 
                <span className='w-1/3 flex font-bold'> 
                  {/* <h1 className="bg-blue-500 rounded-full text-blue-100 p-2 text-3xl w-8" >{" "}</h1> */}
                  Gender
                </span>
                  {"Male"}
              </label>
            </div>
            <div className="flex my-4 ">
              <label className=" w-full flex flex-wrap "> 
                <span className='w-1/3 flex font-bold'> 
                  {/* <h1 className="bg-blue-500 rounded-full text-blue-100 p-2 text-3xl w-8" >{" "}</h1> */}
                  DOB
                </span>
                  {"01/01/2000"}
              </label>
            </div>
            <div className="flex my-4 ">
              <label className=" w-full flex flex-wrap "> 
                <span className='w-1/3 flex font-bold'> 
                  {/* <h1 className="bg-blue-500 rounded-full text-blue-100 p-2 text-3xl w-8" >{" "}</h1> */}
                  Courses
                </span>
                  {"MERN STACK, REACT DEVELOPER"}
              </label>
            </div>
            <div className="flex my-4 ">
              <label className=" w-full flex flex-wrap "> 
                <span className='w-1/3 flex font-bold'> 
                  {/* <h1 className="bg-blue-500 rounded-full text-blue-100 p-2 text-3xl w-8" >{" "}</h1> */}
                  Subscription type
                </span>
                  {"Premium"}
              </label>
            </div>
            <div className="flex my-4 ">
              <label className=" w-full flex flex-wrap "> 
                <span className='w-1/3 flex font-bold'> 
                  {/* <h1 className="bg-blue-500 rounded-full text-blue-100 p-2 text-3xl w-8" >{" "}</h1> */}
                  DOJ
                </span>
                  {"10/01/2023"}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </AuthRoute>
  )
}

export default profile