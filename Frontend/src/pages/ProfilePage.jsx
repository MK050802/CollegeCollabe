import React from "react";
import arya from "./images/arya.jpg"

const ProfilePage = () => {
  return (
    <div className=" mx-auto mt-16 rounded  w-full overflow-hiddenpt-16  bg-sky-600 ">
      <div
        className="h-[150px] bg-gradient-to-r from-orange-500 to-orange-400 ml-36 mr-36"
        style={{ boxShadow: "2px 0px 16px black, -2px 0px 16px black" }}
      ></div>

      <div
        className="flex bg-gray-100 mr-36 ml-36"
        style={{ boxShadow: "2px 0px 16px black, -2px 0px 16px black" }}
      >
        <div className="px-12 py-2 flex flex-col pb-28 pl-20  bg-gray-100">
          <div className="h-[170px] shadow-md w-[170px] rounded-full border-4 overflow-hidden -mt-14 border-white mb-4">
            <img
              src={arya}
              className="w-full h-full rounded-full object-center object-cover"
            />
          </div>
          <div>
            <div>
              <h3 className="text-3xl text-slate-700 relative font-semibold leading-6">
                Ashish Aryawarti
              </h3>
              <p className="text-xl text-gray-600 mt-2 mb-2 ">
                NIT Kurukshetra, Haryana
              </p>
              <p className="text-lg text-gray-600 mt-2 mb-2">
                Varanasi , Uttar Pradesh
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-orange-500 px-3 py-2 text-sm font-medium text-white transition hover:border-gray-300 active:bg-white hover:bg-gray-100 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 mt-4 mb-6"
              >
                Send Message
              </button>
            </div>

            <div className="flex w-96 gap-4 flex-wrap mt-5">
              <span className=" w-22  rounded-lg bg-indigo-100 px-4 py-2 h-8 text-xs font-medium text-indigo-800">
                ECE
              </span>

              <span className="max-w-22 rounded-lg bg-indigo-100 px-4 py-2 h-8 text-xs font-medium text-indigo-800">
                2021-2025
              </span>
              <span className="max-w-32 rounded-lg bg-indigo-100 px-4 py-2 h-8 text-xs font-medium text-blue-800">
                Web Developer
              </span>
              <span className="max-w-32 rounded-lg bg-indigo-100 px-4 h-8 py-2 text-xs font-medium text-indigo-800">
                Flutter Developer
              </span>
              <span className="max-w-32 rounded-lg bg-indigo-100 px-4 h-8 py-2 text-xs font-medium text-indigo-800">
                DSA
              </span>
              <span className="maxw-32 rounded-lg bg-indigo-100 px-4 h-8 py-2 text-xs font-medium text-indigo-800">
                Problem solver
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-12 mt-20">
          <h4 className="text-2xl font-medium leading-3 mt-16 mb-8 text-slate-700">
            About Me
          </h4>
          <p className="text-sm text-stone-700">
            Hi, I'm Aryawarti. I'm a developer who writes clean code but can't
            keep my desk tidy.
            <br />
            When I'm not debugging, you can find me turning coffee into code and
            dreaming of the
            <br />
            day my code compiles without errors. My favorite programming
            language is sarcasm, and <br /> my spirit animal is a rubber duck.
            Let's merge conflicts and laugh at each other's syntax <br />{" "}
            errors!
          </p>
          <button
            type="button"
            className="inline-flex w-28 cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-orange-500 px-3 py-2 text-sm font-medium text-white transition hover:border-gray-300 active:bg-white hover:bg-gray-100 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 mt-16 mb-6 " 
          >
           My Notes
          </button>
        </div>
      </div>
    </div>
  );
};
      
export default ProfilePage; 
                      