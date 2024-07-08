import React from "react";
import { filters } from "../data/filterData";
import JobCard from "../components/JobCard";
import Footer from "./Footer/Footer";
import filterIcon from "./images/filterIcon.png";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

function JobAndIntern() {
  const handleFilter = (value, sectionId) => {
    const searchParams = new URLSearchParams(location.search);
    // getAll() is a method provided by the URLSearchParams object that retrieves all values associated with a specific query parameter.
    // console.log("searchParams");
    let filterValue = searchParams.getAll(sectionId);
    console.log("filtervalue hai", filterValue);
    if (filterValue.length > 0 && filterValue[0].split(",").includes(value)) {
      filterValue = filterValue[0].split(",").filter((item) => item !== value);
      console.log("hii");
      if (filterValue.length === 0) {
        searchParams.delete(sectionId);
      }
    } else {
      filterValue.push(value);
    }
    if (filterValue.length > 0) {
      searchParams.set(sectionId, filterValue.join(","));
    }
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  return (
    <div className="flex flex-col bg-sky-600 h-screen mt-20">
      <div className="flex mb-5">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-start mt-20 ml-28 mb-7  w-20 b text-gray-200 text-5xl font-semibold gap-32">
            {" "}
            <span>Filter</span>
            <img src={filterIcon} alt="" className="w-12 h-12" />
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 ">
            <div className="mt-2 ml-32 h-96 w-72 shadow-custom">
              {filters.map((section) => (
                <Disclosure
                  // defaultOpen={false}
                  as="div"
                  key={section.id}
                  className="border-b border-white py-7 pl-5 pr-5  "
                >
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root ">
                        <DisclosureButton className="flex items-center justify-between w-full py-3 text-sm text-gray-200 hover:text-gray-500">
                          <span className="font-medium text-gray-100">
                            {section.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pt-6">
                        <div className="space-y-4">
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.value}
                                type="checkbox"
                                defaultChecked={option.checked}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                onChange={() =>
                                  handleFilter(option.value, section.id)
                                }
                              />
                              <label
                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                className="ml-3 text-sm text-gray-200"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 ml-80 w-full">
          {
            <>
              <JobCard
                loc={"Rachi,Jharkhand"}
                comType={"Flutter Developer"}
                duration={"1-6 months"}
                stipend={"0k-10k"}
              />
              <JobCard
                loc={"Banglore,Karnatak"}
                comType={"SDE"}
                duration={"1-4 months"}
                stipend={"10k-20k"}
              />
              <JobCard
                loc={"Haidrabad,Telangana"}
                comType={"Web Developer"}
                duration={"1-3 months"}
                stipend={"20k-30"}
              />
              <JobCard
                loc={"Rachi,Jharkhand"}
                comType={"Flutter Developer"}
                duration={"1-6 months"}
                stipend={"10k"}
              />
              <JobCard
                loc={"Rachi,Jharkhand"}
                comType={"Flutter Developer"}
                duration={"1-6 months"}
                stipend={"10k"}
              />
              <JobCard
                loc={"Rachi,Jharkhand"}
                comType={"Data Analys"}
                duration={"1-6 months"}
                stipend={"10k"}
              />
            </>
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default JobAndIntern;
