import React from "react";
import Testimonial from "../components/Testimonial";

const About = () => {

  const aboutData={
    whoWeAre:[
      {
        id:1,
        description:" Bonzer Code Infotech is an startup dealing in software developement and consulting and technical training.",
        image:"./jason-goodman-Oalh2MojUuk-unsplash.jpg"
      },
      {
        id:2,
        description:" We are providing a range of services like web-app developement, mobile-app developement, Search Engine Optimization to name a few.",
        image:"./christopher-gower-m_HRfLhgABo-unsplash.jpg"
      },
      {
        id:3,
        description:" Bonzer Code Infotech is an startup dealing in software developement and consulting and technical training.",
        image:"./jason-goodman-Oalh2MojUuk-unsplash.jpg"
      },
      // {
      //   id:4,
      //   description:" Bonzer Code Infotech is an startup dealing in software developement and consulting and technical training.",
      //   image:"./jason-goodman-Oalh2MojUuk-unsplash.jpg"
      // },
      // {
      //   id:5,
      //   description:" We are providing a range of services like web-app developement, mobile-app developement, Search Engine Optimization to name a few.",
      //   image:"./christopher-gower-m_HRfLhgABo-unsplash.jpg"
      // },
      // {
      //   id:6,
      //   description:" Bonzer Code Infotech is an startup dealing in software developement and consulting and technical training.",
      //   image:"./jason-goodman-Oalh2MojUuk-unsplash.jpg"
      // }
    ]
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-12">About</h2>

      <h2 className="text-2xl text-center font-bold mb-6">WHO WE ARE?</h2>

      {
        aboutData.whoWeAre.map((e, i)=>{
          return(
            <div key={i} className={`sm:flex justify-between w-full bg-gray-100 p-2 m-2 sm:bg-transparent sm:p-0  
            ${(i===1 || i%2!==0) ? " sm:flex-row-reverse" : ""}`}
            > 
            <div className={`sm:w-1/2  bg-blue-50  ${(i===1 || i%2!==0) ? "  sm:my-4" : ""}`}>
              <div className={`p-6 flex justify-center items-center h-full`}>
                <p className="text-md text-center font-semibold">
                  {e.description}
                </p>
              </div>
            </div>
            <div className={`sm:w-1/2 flex justify-center items-center  ${(i===1 || i%2!==0) ? "  sm:my-4" : ""} `}>
              <img
                src={e.image}
                alt={"image"}
                className={`w-3/4 shadow-lg rounded-lg object-fill`}
              />
            </div>
          </div>
          )
        })
      }

      {/* <div className="sm:flex justify-between w-full bg-gray-100 p-2 m-2 sm:bg-transparent sm:p-0">
        <div className="sm:w-1/2  bg-blue-50">
          <div className="p-6 flex justify-center items-center h-full">
            <p className="text-md text-center font-semibold">
              Bonzer Code Infotech is an startup dealing in software
              developement and consulting and technical training.
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 flex justify-center items-center ">
          <img
            src="./jason-goodman-Oalh2MojUuk-unsplash.jpg"
            className="w-3/4 shadow-lg rounded-lg object-fill"
          />
        </div>
      </div>

      <div className="sm:flex justify-between w-full bg-gray-100 p-2 m-2 sm:bg-transparent sm:p-0 sm:flex-row-reverse">
        <div className="sm:w-1/2  bg-blue-50  my-4">
          <div className="p-6 flex justify-center items-center h-full">
            <p className="text-md text-center font-semibold">
            We are providing a range of services like web-app developement,
            mobile-app developement, Search Engine Optimization to name a few.
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 flex justify-center items-center  my-4">
          <img
            src="./christopher-gower-m_HRfLhgABo-unsplash.jpg"
            className="w-3/4 shadow-lg rounded-lg object-fill"
          />
        </div>
      </div>

      <div className="sm:flex justify-between w-full bg-gray-100 p-2 m-2 sm:bg-transparent sm:p-0">
        <div className="sm:w-1/2  bg-blue-50">
          <div className="p-6 flex justify-center items-center h-full">
            <p className="text-md text-center font-semibold">
              Bonzer Code Infotech is an startup dealing in software
              developement and consulting and technical training.
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 flex justify-center items-center ">
          <img
            src="./christopher-gower-m_HRfLhgABo-unsplash.jpg"
            className="w-3/4 shadow-lg rounded-lg object-fill"
          />
        </div>
      </div> */}
{/* 
      <div className="sm:flex sm:flex-row-reverse justify-between w-full">
        <div className="sm:w-1/2  my-4 bg-blue-50">
          <p className="text-md text-center font-semibold">
            We are providing a range of services like web-app developement,
            mobile-app developement, Search Engine Optimization to name a few.
          </p>
        </div>
        <div className="sm:w-1/2 my-4 flex justify-center items-center ">
          <img
            src="./christopher-gower-m_HRfLhgABo-unsplash.jpg"
            className="w-3/4 shadow-lg rounded-lg object-fill"
          />
        </div>
      </div> */}

      <Testimonial />
    </div>
  );
};

export default About;
