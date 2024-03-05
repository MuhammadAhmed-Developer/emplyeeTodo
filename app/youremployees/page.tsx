"use client";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoPersonAddOutline } from "react-icons/io5";
import { useState } from "react";
import Model from "@/components/Model";

export default function YourEmployee() {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const YourEmployData = [
    {
      id: 1,
      name: "Ahmed",
      phone: "98989999989",
      designation: "Software Engineer",
      email: "gamial@gmail.com",
      checked: true,
    },
    {
      id: 1,
      name: "Ahmed",
      phone: "98989999989",
      designation: "Software Engineer",
      email: "gamial@gmail.com",
      checked: true,
    },
    {
      id: 1,
      name: "Ahmed",
      phone: "98989999989",
      designation: "Software Engineer",
      email: "gamial@gmail.com",
      checked: true,
    },
    {
      id: 1,
      name: "Ahmed",
      phone: "98989999989",
      designation: "Software Engineer",
      email: "gamial@gmail.com",
      checked: false,
    },
  ];
  return (
    <div class="flex flex-col mt-8">
      <div class="overflow-x-auto sm:-mx-6 lg:mx-2">
        <div className="flex justify-between ">
          <h1 className="py-2 sm:px-6 lg:px-14 font-bold text-primary text-xl">
            Your Employees
          </h1>
          <div className="flex items-center">
            <button className="bg-red-500 flex items-center rounded-lg text-white text-sm px-2 py-2 mr-2">
              <MdOutlineDeleteOutline />
              Delete
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-primary flex items-center gap-2 text-white font-semibold py-2 px-2 text-sm rounded-xl sm:mr-6 lg:mr-14"
            >
              <IoPersonAddOutline className="text-xl" />
              Add Employee
            </button>
          </div>
        </div>
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-left text-sm font-light text-surface dark:text-white">
              <thead class="border-b border-neutral-200 font-medium dark:border-white/10">
                <tr>
                  <th scope="col" class="px-5 py-4">
                    <input
                      type="checkbox"
                      name="checkbox"
                      id="checkbox"
                      checked={isAllChecked}
                      className="accent-primary cursor-pointer"
                    />
                  </th>
                  <th scope="col" class="px-5 py-4">
                    #
                  </th>
                  <th scope="col" class="px-5 py-4">
                    Name
                  </th>
                  <th scope="col" class="px-5 py-4">
                    Phone No
                  </th>
                  <th scope="col" class="px-5 py-4">
                    designation
                  </th>
                  <th scope="col" class="px-5 py-4">
                    Email
                  </th>
                  <th scope="col" class="px-5 py-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {YourEmployData.map((item, i) => {
                  return (
                    <tr
                      key={i}
                      class="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600"
                    >
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        <input
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                          checked={item.checked}
                          className="accent-primary cursor-pointer"
                        />
                      </td>
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        {i + 1}
                      </td>
                      <td class="whitespace-nowrap px-5 py-4">{item.name}</td>
                      <td class="whitespace-nowrap px-5 py-4">{item.phone}</td>
                      <td class="whitespace-nowrap px-5 py-4">
                        {item.designation}
                      </td>
                      <td class="whitespace-nowrap px-5 py-4">{item.email}</td>
                      <td class="whitespace-nowrap px-5 py-4">
                        <button>
                          <CiEdit className="text-primary text-xl" />
                        </button>
                        <button className="text-red-500 ml-2 text-xl">
                          <MdOutlineDeleteOutline />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Model isOpen={isOpen} onClose={onClose} />
    </div>
  );
}
