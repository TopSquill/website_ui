import { ChevronRight } from "lucide-react";
import React from "react";
import RightBgImage from "./RightBgImage";
import LeftBgImage from "./LeftBgImage";

const Footer = () => {
  return (
    <footer className="mt-10 py-10 relative isolate px-6 lg:px-8 bg-footer-200">
      {/* <LeftBgImage /> */}
      <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row pt-10">
        <div className="w-full px-4 md:w-1/2 lg:px-0">
          <h1 className="max-w-sm text-3xl font-bold">
            Subscribe to our Newsletter
          </h1>
          <form
            action=""
            className="mt-4 inline-flex w-full items-center md:w-3/4"
          >
            <input
              className="flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Email"
            ></input>
            <button
              type="button"
              className="ml-4 rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </form>
        </div>
        <div className="m-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3 text-center">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">
                Company
              </p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li className="cursor-pointer hover:font-bold">About us</li>
                <li className="cursor-pointer hover:font-bold">
                  Company History
                </li>
                <li className="cursor-pointer hover:font-bold">Our Team</li>
                {/* <li className="cursor-pointer hover:font-bold">Our Vision</li> */}
                <li className="cursor-pointer hover:font-bold">
                  Press Release
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
