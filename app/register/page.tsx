"use client";
import { signupUser } from "@/redux/auth/registerSlice";
import { userData } from "@/redux/types";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Register() {
  const dispatch: any = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, isSuccess, isError, errorMessage } = useSelector(
    (state: any) => state.signup
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const userData: userData = {
      name: name,
      email: email,
      password: password,
    };
    dispatch(signupUser(userData));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6  lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-primary placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-primary placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block px-2 w-full ring-1 ring-inset ring-primary rounded-md border-0 py-1.5 text-gray-900 shadow-sm outline-none   placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
              >
                {isLoading ? "Loading..." : "Register"}
              </button>
            </div>
          </form>

          <div className="mt-10 text-center text-sm text-gray-500">
            Already member?{" "}
            <Link
              href="/login"
              className="font-semibold leading-6 text-primary hover:text-indigo-500"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
