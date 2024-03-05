import React from 'react'

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
  ]

  return (
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:mx-2">
        <h1 className='py-2 sm:px-6 lg:px-14 font-bold text-primary text-xl'>All Employees</h1>
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table
              class="min-w-full text-left text-sm font-light text-surface dark:text-white">
              <thead
                class="border-b border-neutral-200 font-medium dark:border-white/10">
                <tr>
                  <th scope="col" class="px-5 py-4">#</th>
                  <th scope="col" class="px-5 py-4">Name</th>
                  <th scope="col" class="px-5 py-4">Phone No</th>
                  <th scope="col" class="px-5 py-4">designation</th>
                  <th scope="col" class="px-5 py-4">Email</th>
                </tr>
              </thead>
              <tbody>
                {
                  EmployData.map((item, i) => {
                    return (
                      <tr key={i}
                        class="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">{i + 1}</td>
                        <td class="whitespace-nowrap px-5 py-4">{item.name}</td>
                        <td class="whitespace-nowrap px-5 py-4">{item.phone}</td>
                        <td class="whitespace-nowrap px-5 py-4">{item.designation}</td>
                        <td class="whitespace-nowrap px-5 py-4">{item.email}</td>
                      </tr>
                    )
                  })
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
