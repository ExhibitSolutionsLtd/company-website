import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import Image from "next/image";
import React from "react";

const ITServices = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        home="/"
        about="/#about"
        services="/#services"
        contact="/#contact"
      />
      <div className="bg-gray-50 py-12 px-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          {/* Left Section: Visual */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative">
              <Image
                src="/assets/softwares/itservices.png"
                alt="Services Illustration"
                className="rounded-lg shadow-lg"
                width={600}
                height={500}
              />
              {/* <div className="absolute inset-0 bg-blue-500 opacity-10 rounded-lg"></div> */}
            </div>
          </div>

          {/* Right Section: Content */}
          <div className="lg:w-1/2 lg:pl-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              IT Managed Services
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Whether you’re a business executive or a seasoned IT pro, using
              managed services can make your job easier. When effectively
              executed, a Managed Service (MS) is like gaining the capability of
              an IT Department with the expertise of seasoned professionals to
              deliver focused application operations to your company’s business
              application users. A managed service is designed to handle the
              daily operations of your specialized applications. A managed
              service can:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-gray-700">
                  Provide more capability to your company end-users
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-gray-700">
                  Allow in-house IT to focus on more strategic IT programs
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-gray-700">
                  Free your team to focus on your business’ core competencies
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ITServices;
