import React from "react";
import { Button } from "@mui/material";

export default function JobCard(props) {
  return (
    <div className="flex flex-col  w-3/4  pr-5 mb-12 shadow-custom pb-5 pl-7 mt-2 rounded-xl bg-gray-200 pt-4">
      <div className="font-semibold text-xl">{props.comType}</div>
      <div>Thinksprout Infotech</div>
      <div className="flex flex-row mt-5 gap-5 ">
        <div className=" flex border-r border-gray-500 pr-2.5">
          <div class="text-gray-500 mr-2">
            <i class="fas fa-clock text-orange-500"></i>
          </div>{" "}
          {props.duration} duration
        </div>
        <div className="border-r border-gray-500 pr-2.5">
          {" "}
          ₹ {props.stipend}
        </div>
        <div className="flex gap-2 ">
          <svg
            className="h-6 w-6 text-orange-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zM12 5c3.313 0 6 2.687 6 6 0 4.418-6 10-6 10s-6-5.582-6-10c0-3.313 2.687-6 6-6z"
            />
          </svg>
          {props.loc}
        </div>
      </div>
      <div className="flex justify-between mt-4 items-center ">
        <div className="text-gray-500 text-sm"> Starts in 1-3 months</div>
        <div>
          <Button
            sx={{
              backgroundColor: "#f97316",
              color: "white",
              "&:hover": {
                backgroundColor: "#ea580c",
              },
            }}
          >
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
}
