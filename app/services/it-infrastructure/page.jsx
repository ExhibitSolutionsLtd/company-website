import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import Image from "next/image";
import React from "react";

const ITInfrastructure = () => {
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
                src="/assets/softwares/it-insfrastructure.jpg"
                alt="Strategy Illustration"
                className=""
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* Right Section: Content */}
          <div className="lg:w-1/2 lg:pl-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              IT Insfrastructure
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              IT infrastructure allows an organization to deliver IT solutions
              and services to its employees, partners and/or customers and is
              usually internal to an organization and deployed within owned
              facilities. With an IT infrastructure, a company can:
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
                  Provide a positive customer experience by providing
                  uninterrupted access to its website and online store.
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
                  Develop and launch solutions to market with speed.
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
                  Collect data in real time to make quick decisions.
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
                  Improve employee productivity.
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

export default ITInfrastructure;
