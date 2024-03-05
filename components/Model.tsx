import { SlClose } from "react-icons/sl";
import { IoPersonAddOutline } from "react-icons/io5";

export default function Model({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`fixed z-10 overflow-y-auto top-0 w-full left-0 ${
          isOpen ? "block" : "hidden"
        }`}
        id="modal"
      >
        <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-900 opacity-75" />
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>
          <div
            className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="p-3 flex justify-between">
              <h1 className="text-primary text-xl font-bold">Add Employee</h1>
              <SlClose
                onClick={onClose}
                className="text-2xl text-primary cursor-pointer "
              />
            </div>
            <div className="bg-white px-4 pt-3 pb-4 sm:p-6 sm:pb-4">
              <label className="font-medium text-gray-800">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3"
              />
              <label className="font-medium text-gray-800">Phone No</label>
              <input
                type="phone"
                id="phone"
                name="phone"
                className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3"
              />
              <label className="font-medium text-gray-800">Designation</label>
              <input
                type="text"
                id="designation"
                name="designation"
                className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3"
              />
              <label className="font-medium text-gray-800">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3"
              />
            </div>
            <div className="bg-gray-200 px-4 py-3 flex justify-end">
              <button
                type="button"
                className="py-2 px-4 bg-primary text-white rounded font-medium hover:bg-blue-700 mr-2 transition duration-500 flex items-center gap-1"
              >
                <IoPersonAddOutline className="text-xl" />
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
