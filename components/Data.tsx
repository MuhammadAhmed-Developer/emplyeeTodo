import React from "react";

export default function Data() {
  const EmployData = [
    {
      id: 1,
      name: "Ahmed",
      phone: "98989999989",
      designation: "Software Engineer",
      email: "gamial@gmail.com",
    },
    {
      id: 1,
      name: "Ahmed",
      phone: "98989999989",
      designation: "Software Engineer",
      email: "gamial@gmail.com",
    },
    {
      id: 1,
      name: "Ahmed",
      phone: "98989999989",
      designation: "Software Engineer",
      email: "gamial@gmail.com",
    },
    {
      id: 1,
      name: "Ahmed",
      phone: "98989999989",
      designation: "Software Engineer",
      email: "gamial@gmail.com",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:mx-2">
        <h1 className="py-2 sm:px-6 lg:px-14 font-bold text-primary text-xl">
          All Employees
        </h1>
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
              <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                <tr>
                  <th scope="col" className="px-5 py-4">
                    #
                  </th>
                  <th scope="col" className="px-5 py-4">
                    Name
                  </th>
                  <th scope="col" className="px-5 py-4">
                    Phone No
                  </th>
                  <th scope="col" className="px-5 py-4">
                    designation
                  </th>
                  <th scope="col" className="px-5 py-4">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody>
                {EmployData.map((item, i) => {
                  return (
                    <tr
                      key={i}
                      className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {i + 1}
                      </td>
                      <td className="whitespace-nowrap px-5 py-4">
                        {item.name}
                      </td>
                      <td className="whitespace-nowrap px-5 py-4">
                        {item.phone}
                      </td>
                      <td className="whitespace-nowrap px-5 py-4">
                        {item.designation}
                      </td>
                      <td className="whitespace-nowrap px-5 py-4">
                        {item.email}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
