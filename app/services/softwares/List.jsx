import Image from "next/image";
import React from "react";

const SoftwareList = ({ softwares }) => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      {softwares.map((software, index) => (
        <div
          key={software.id}
          className={`flex flex-col md:flex-row ${
            index % 2 === 0 ? "" : "md:flex-row-reverse"
          } items-center`}
        >
          <div className="md:w-1/2">
            <Image
              src={software.image}
              alt={software.title}
              className="rounded-lg shadow-lg w-full"
              width={350}
              height={300}
            />
          </div>

          <div className="md:w-1/2 md:pl-8 md:pr-8 text-center md:text-left mt-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {software.title}
            </h2>
            <p className="text-gray-600 text-justify">{software.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SoftwareList;
