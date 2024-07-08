import React, { useState } from "react";
import arya from "./images/arya.jpg"

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const people = [
    {
      id: 1,
      name: "Sweety Devi",
      college: "Mad House University",
      branch: "Power BI ",
      place: "Khachi",
    },
    {
      id: 2,
      name: "Guddu Pandit",
      college: "Tribal Government School",
      branch: "ECE",
      place: "Vashepur",
    },
    {
      id: 3,
      name: "Vinod Khanna",
      college: "NIT Kurukshetra",
      branch: "CS",
      place: "Mumbai",
    },
    {
      id: 4,
      name: "Aryawarti",
      college: "Banaras Hindu University",
      branch: "Phylosophy",
      place: "Kashi",
    },
    {
      id: 4,
      name: "Bauwa ",
      college: "Purv madhyamik vidhyalay , Chaklala",
      branch: "Mathematics",
      place: "Varanasi,Uttar Pradesh",
    },
    {
      id: 4,
      name: "Ashish Kumar Yadav",
      college: "Allahabad University",
      branch: "Phylosophy",
      place: "Kashi",
    },
    {
      id: 4,
      name: "Aryawarti",
      college: "Banaras Hindu University",
      branch: "Astro Physics",
      place: "Banaras",
    },
    {
      id: 4,
      name: "Shantanu Singh",
      college: "Patna University",
      branch: "Sprituality",
      place: "Rohtash ,Bihar",
    },
    {
      id: 4,
      name: "Aryawarti",
      college: "Banaras Hindu University",
      branch: "Phylosophy",
      place: "Kashi",
    },
    // Add more people as needed
  ];

  const filteredPeople = people.filter((person) => {
    const queryLowerCase = query.toLowerCase();
    return (
      person.name.toLowerCase().includes(queryLowerCase) ||
      person.college.toLowerCase().includes(queryLowerCase) ||
      person.branch.toLowerCase().includes(queryLowerCase) ||
      person.place.toLowerCase().includes(queryLowerCase)
    );
  });

  return (
    <div className="min-h-screen flex items-center justify-center mt-24 bg-sky-600">
      <div className="bg-white p-8  rounded shadow-md w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-4">Search People</h1>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Search by name, college, branch, or place..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul>
          {filteredPeople.map((person) => (
            <li key={person.id} className="p-2 border-b border-gray-200">
              <div className="flex items-center">
                <img
                  className="w-14 h-14 rounded-full object-cover"
                  src={arya}
                  alt={arya}
                />
                <div className="font-bold ml-5">{person.name}</div>
              </div>
              <div className="ml-16 p-3 pt-0">
                <div className="text-sm text-gray-600">{person.college}</div>
                <div className="text-sm text-gray-600">{person.branch}</div>
                <div className="text-sm text-gray-600">{person.place}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchComponent;
