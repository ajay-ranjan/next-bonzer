import React from "react";
import ContactForm from "../components/ContactForm";
import Divider from "@mui/material/Divider";
import { EmailRounded, LocationOnRounded, PhoneAndroidRounded, PublicOutlined, WebStories } from "@mui/icons-material";


const contact = () => {
  return (
    <div className=" flex justify-center w-full ">

      <div className="sm:flex flex-wrap sm:w-4/5 shadow-xl bg-gray-100">
        <div className="p-2 sm:w-1/2  bg-blue-500 text-gray-200">
          <div className="flex my-4">
            <label className=" "> 
              <span> 
                <LocationOnRounded className="bg-blue-500 rounded-full text-blue-100 p-2 m-1 text-3xl" />
              </span>
              Address: 
              <span>
                GF-01, New Industrial area Noida - 201301
              </span>
            </label>
            <p></p>
          </div>
          <div className="flex my-4 ">
            <label className=" "> 
              <span> 
                <PhoneAndroidRounded className="bg-blue-500 rounded-full text-blue-100 p-2 m-1 text-3xl" />
              </span>
              Phone:
            <a href="tel:+91-01234567890"> +91-01234567890</a>
            </label>
          </div>
          <div className="flex my-4 ">
            <label className=" "> 
              <span> 
                <EmailRounded className="bg-blue-500 rounded-full text-blue-100 p-2 m-1 text-3xl" />
              </span>
              Email:
            <a href="mailto:testing@test.com" className="hover:text-blue-800"> testing@test.com</a>
            </label>
          </div>
          <div className="flex my-4 ">
            <label className=" "> 
              <span> 
                <PublicOutlined className="bg-blue-500 rounded-full text-blue-100 p-2 m-1 text-3xl" />
              </span>
              Website:
            <a href="https://www.test.com" className="hover:text-blue-800"> www.test.com</a>
            </label>

          </div>
        </div>
        <div className="p-2 sm:w-1/2">
          <ContactForm />
        </div>
      </div>

    </div>
  );
};

export default contact;
