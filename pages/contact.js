import React from "react";
import ContactForm from "../components/ContactForm";
import Divider from "@mui/material/Divider";
import { EmailRounded, LocationOnRounded, PhoneAndroidRounded, PublicOutlined, WebStories } from "@mui/icons-material";
import Requests from "./requests";


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
            <a href="tel:+91-8521052424"> +91-8521 05 2424</a>
            </label>
          </div>
          <div className="flex my-4 ">
            <label className=" "> 
              <span> 
                <EmailRounded className="bg-blue-500 rounded-full text-blue-100 p-2 m-1 text-3xl" />
              </span>
              Email:
            <a href="mailto:info@bonzercode.com" className="hover:text-blue-800"> info@bonzercode.com</a>
            </label>
          </div>
          <div className="flex my-4 ">
            <label className=" "> 
              <span> 
                <PublicOutlined className="bg-blue-500 rounded-full text-blue-100 p-2 m-1 text-3xl" />
              </span>
              Website:
            <a href="https://bonzercode.com" className="hover:text-blue-800"> https://bonzercode.com</a>
            </label>

          </div>
        </div>
        <div className="p-2 sm:w-1/2">
          <ContactForm />
        </div>
        {/* <Requests /> */}
      </div>

    </div>
  );
};

export default contact;
