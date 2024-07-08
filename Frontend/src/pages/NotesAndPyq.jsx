import React, { useEffect, useState } from "react";
import NotesPage from "../components/NotesPage";

const NotesAndPyq = () => {
  const notes = [
    {
      College: "NIT Kurukshetra",
      Branch: "ECE",
      Subject: "ECPC-40",
      type: "notes",
    },
    {
      College: "NIT Kurukshetra",
      Branch: "ECE",
      Subject: "ECPP-4",
      type: "pyq",
    },
    {
      College: "NIT Kurukshetra",
      Branch: "ECE",
      Subject: "ECPP-4",
      type: "notes",
    },
    {
      College: "NIT Kurukshetra",
      Branch: "ECE",
      Subject: "ECPP-4",
      type: "notes",
    },
    {
      College: "NIT Kurukshetra",
      Branch: "ECE",
      Subject: "ECPP-4",
      type: "notes",
    },
    {
      College: "NIT Kurukshetra",
      Branch: "ECE",
      Subject: "ECPP-4",
      type: "notes",
    },
    {
      College: "NIT Kurukshetra",
      Branch: "CS",
      Subject: "CS-21",
      type: "notes",
    },
    {
      College: "NIT Kurukshetra",
      Branch: "CS",
      Subject: "CS-21",
      type: "pyq",
    },
    {
      College: "NIT Kurukshetra",
      Branch: "CS",
      Subject: "CS-21",
      type: "notes",
    },
    {
      College: "NIT Kurukshetra",
      Branch: "CS",
      Subject: "CS-40",
      type: "pyq",
    },
    {
      College: "NIT Kurukshetra",
      Branch: "CS",
      Subject: "CS-30",
      type: "notes",
    },
    {
      College: "NIT Kurukshetra",
      Branch: "ECE",
      Subject: "ECPC-40",
      type: "notes",
    },
    {
      College: "NIT Kurukshetra",
      Branch: "ECE",
      Subject: "ECPC-40",
      type: "notes",
    },
    {
      College: "NIT Kurukshetra",
      Branch: "ECE",
      Subject: "ECPC-40",
      type: "notes",
    },
    {
      College: "NIT Kurukshetra",
      Branch: "ECE",
      Subject: "ECPC-40",
      type: "notes",
    },
    {
      College: "NIT Kurukshetra",
      Branch: "ME",
      Subject: "ME-33",
      type: "notes",
    },
    {
      College: "NIT Kurukshetra",
      Branch: "ECE",
      Subject: "PHIR-11",
      type: "pyq",
    },
    {
      College: "NIT Kurukshetra",
      Branch: "CS",
      Subject: "CSIR-11",
      type: "pyq",
    },
    {
      College: "NIT Kurukshetra",
      Branch: "CE",
      Subject: "CE-22",
      type: "notes",
    },
    {
      College: "NIT Jamshedpur",
      Branch: "IT",
      Subject: "IT-32",
      type: "notes",
    },
    {
      College: "NIT Jamshedpur",
      Branch: "ECE",
      Subject: "ECPE-35",
    },
    {
      College: "NIT Jamshedpur",
      Branch: "CS",
      Subject: "ECPE-35",
    },
    {
      College: "IIT-BHU",
      Branch: "IT",
      Subject: "ECPE-35",
    },
    {
      College: "IIT-BHU",
      Branch: "CS",
      Subject: "ECPE-35",
    },
  ];

  const [college, setCollege] = useState("");
  const [branch, setBranch] = useState("");
  const [subject, setSubject] = useState("");
  const [allBranches, setAllBranches] = useState([]);
  const [allSubject, setAllSubject] = useState([]);
  const [uniqueColleges, setUniqueColleges] = useState([]);
  const [collNote, setCollNote] = useState([]);
  const [branchNote, setBranchNote] = useState([]);
  const [subNote, setSubNote] = useState([]);

  useEffect(() => {
    const coll = [...new Set(notes.map((note) => note.College))];
    setUniqueColleges(coll);
  }, []);

  useEffect(() => {
    const b = notes.filter((note) => note.College === college);
    const uniqueB = [...new Set(b.map((x) => x.Branch))];
    setAllBranches(uniqueB);
    setCollNote(b);
  }, [college]);

  useEffect(() => {
    const sc = notes.filter((note) => note.College === college);
    const sb = sc.filter((note) => note.Branch === branch);
    const uniqueSub = [...new Set(sb.map((x) => x.Subject))];
    setAllSubject(uniqueSub);
    setBranchNote(sb);
  }, [college, branch]);

  useEffect(() => {
    const sc = notes.filter((note) => note.College === college);
    const sb = sc.filter((note) => note.Branch === branch);
    const ss = sb.filter((note) => note.Subject === subject);
    setSubNote(ss);
  }, [college, branch, subject]);

  return (
    <div className="flex flex-col bg-gradient-to-r min-h-screen w-screen justify-center items-center mt-20">
      <div className="flex flex-col items-center">
        {/* header name  */}
        <div className="text-white text-5xl pl-10 pt-6 w-auto inline-block mb-2 font-bold ">
          <span className="text-orange-500">Notes</span>
          <span> & </span>
          <span className="text-orange-500">PYQ</span>
        </div>

        {/* input fields */}
        <div className="flex flex-row space-x-20 mt-8 p-0 ml-8">
          {/* college input */}
          <div>
            <label
              htmlFor="college"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            ></label>
            <select
              id="college"
              className="bg-white border border-white text-gray-700 text-xl rounded-lg focus:ring-blue-700 focus:border-blue-500 block w-full pt-3.5 pl-5 pb-3.5 pr-5 dark:bg-orange-500 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  font-semibold"
              value={college}
              onChange={(event) => setCollege(event.target.value)}
            >
              <option selected>College</option>
              {uniqueColleges.map((college) => {
                return (
                  <option value={college} key={college}>
                    {college}
                  </option>
                );
              })}
            </select>
          </div>

          {/* branch input  */}
          <div>
            <label
              htmlFor="branch"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            ></label>
            <select
              id="branch"
              className="bg-white border border-white text-gray-700 text-xl rounded-lg focus:ring-blue-700 focus:border-blue-500 block w-full pt-3.5 pl-5 pb-3.5 pr-5 dark:bg-orange-500 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  font-semibold"
              value={branch}
              onChange={(event) => setBranch(event.target.value)}
            >
              <option value="" disabled selected>
                Branch
              </option>
              {allBranches.map((b) => {
                return (
                  <option value={b} key={b}>
                    {b}
                  </option>
                );
              })}
            </select>
          </div>

          {/* subject code  */}
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            ></label>
            <select
              id="subject"
              className="bg-white border border-white text-gray-700 text-xl rounded-lg focus:ring-blue-700 focus:border-blue-500 block w-full pt-3.5 pl-5 pb-3.5 pr-5 dark:bg-orange-500 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  font-semibold"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
            >
              <option value="" disabled selected>
                Subject Code
              </option>
              {allSubject.map((sub) => {
                return (
                  <option value={sub} key={sub}>
                    {sub}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <div className="mt-20 ml-52 ">
        {college && !branch && !subject
          ? collNote.map((coll) => {
              return <NotesPage type={coll.type} x={coll.College} />;
            })
          : college && branch && !subject
          ? branchNote.map((coll) => {
              return <NotesPage type={coll.type} x={coll.Branch} />;
            })
          : college &&
            branch &&
            subject &&
            subNote.map((coll) => {
              return <NotesPage type={coll.type} x={coll.Subject} />;
            })}
      </div>
    </div>
  );
};

export default NotesAndPyq;
