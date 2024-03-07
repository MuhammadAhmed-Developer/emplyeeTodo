"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeData } from "../redux/features/employeeSlice";
export default function Data() {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state: any) => state.employee);

  useEffect(() => {
    dispatch(fetchEmployeeData());
  }, [dispatch]);

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
                    Designation
                  </th>
                  <th scope="col" className="px-5 py-4">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={5} className="text-center py-8">
                      Loading...
                    </td>
                  </tr>
                ) : data?.data?.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-8">
                      No data found
                    </td>
                  </tr>
                ) : (
                  <>
                    {data?.data?.map((item: any, i: number) => (
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
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
