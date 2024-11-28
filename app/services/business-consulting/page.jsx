import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import Image from "next/image";
import React from "react";

const BusinessApplication = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        home="/"
        about="/#about"
        services="/#services"
        contact="/#contact"
      />
      <div className="bg-gray-50 py-12 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          {/* Left Section: Visual */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative">
              <Image
                src="/assets/softwares/business-application-consulting.png"
                alt="Strategy Illustration"
                className="rounded-lg shadow-lg"
                width={800}
                height={500}
              />
            </div>
          </div>

          {/* Right Section: Content */}
          <div className="lg:w-1/2 lg:pl-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Business Application and Consulting
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Exhibit IT Solutions Business Application team offers a
              comprehensive range of consulting services to modernize your
              business and accelerate digital transformation.
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
                  Planning, Budgeting, and Forecasting
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
                  Management, External Reporting, and Analysis
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
                  Training and Post-Implementation Support
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
                  Business Process Optimization and Change Management
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

export default BusinessApplication;
