// import Image from "next/image";
// import { ShieldCheck, Eye } from "lucide-react";

// const HeroSection = () => {
//   return (
//     <>
//       <section className="bg-[#1a507c] py-16 px-6 md:py-20 md:px-8">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//           {/* Left Text Section */}
//           <div>
//             <h1 className="text-5xl font-extrabold text-black">Welcome to</h1>
//             <h1 className="text-5xl md:text-4xl font-bold  leading-tight">
//               <span className="text-5xl md:text-4xl text-black">
//                 Exhibit IT
//               </span>{" "}
//               <span className="text-secondary text-5xl md:text-4xl">
//                 Solutions.
//               </span>
//             </h1>
//             <p className="mt-6 text-white text-lg">
//               We are a Technology Solutions Provider based in Kenya and serving
//               the East African Region. Your go to technology hub for hardware
//               and software solutions
//             </p>
//             <div className="flex gap-4 mt-6">
//               <div className="flex flex-col gap-3 text-white">
//                 <Eye className="text-secondary" />
//                 <p className="text-secondary text-sm">Vision</p>
//                 <p className="text-justify">
//                   To be your go to technology hub for hardware and software
//                   solutions across East Africa.
//                 </p>
//               </div>
//               <div className="flex flex-col gap-3 text-white">
//                 <ShieldCheck className="text-secondary" />
//                 <p className="text-secondary text-sm">Mision</p>
//                 <p className="text-justify">
//                   Working reliably and effectively to delight our customers by
//                   providing workable technology solutions and excellent support.
//                 </p>
//               </div>
//             </div>
//             <div className="mt-8 flex flex-wrap gap-4">
//               <a
//                 href="#about"
//                 className="px-6 py-3 bg-secondary text-white font-semibold rounded-lg "
//               >
//                 Learn More
//               </a>
//               <a
//                 href="#contact"
//                 className="flex items-center text-secondary font-semibold hover:underline"
//               >
//                 <span>Contact Us</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-5 h-5 ml-2"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M8 16l4-4m0 0l4-4m-4 4H4"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* Right Image Section */}
//           <div className="relative mt-8">
//             <div className="relative z-10">
//               <div className="relative ">
//                 <Image
//                   src="/assets/code.jpg"
//                   alt="Laptop with Code running"
//                   className="rounded-lg shadow-lg rounded-r-full max-md:w-full"
//                   width={500}
//                   height={100}
//                 />
//                 <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary text-white p-3 rounded-full shadow-lg">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-6 h-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M14.752 11.168l-4.586-2.753a1 1 0 00-1.49.868v5.506a1 1 0 001.49.868l4.586-2.753a1 1 0 000-1.736z"
//                     />
//                   </svg>
//                 </button>
//               </div>

//               <div className="mt-6 grid grid-cols-2 gap-4 rounded-l-full bg-white p-5">
//                 <Image
//                   src="/assets/security.jpg"
//                   alt="Security"
//                   className="rounded-lg shadow-lg rounded-l-full"
//                   width={400}
//                   height={200}
//                 />

//                 <Image
//                   src="/assets/technology.jpg"
//                   alt="Technology"
//                   className="rounded-lg shadow-lg"
//                   width={300}
//                   height={200}
//                 />
//               </div>
//             </div>

//             {/* Decorative Shapes */}
//             <div className="absolute -top-12 -left-16 w-48 h-48 bg-secondary rounded-full z-0"></div>
//             <div className="absolute -bottom-12 -right-4 w-48 h-48 bg-secondary rounded-full z-0"></div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default HeroSection;


import Image from "next/image";
import { ShieldCheck, Eye } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-[#1a507c] py-16 px-6 md:py-20 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div className="order-2 lg:order-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">Welcome to</h1>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span className="text-white">Exhibit IT</span>{" "}
            <span className="text-secondary">Solutions</span>
          </h1>
          
          <p className="text-lg text-gray-200 mb-8">
            We are a Technology Solutions Provider based in Kenya and serving
            the East African Region. Your go to technology hub for hardware
            and software solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Eye className="text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-secondary font-semibold mb-2">Vision</p>
                  <p className="text-gray-200 text-sm">
                    To be your go to technology hub for hardware and software
                    solutions across East Africa.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-secondary font-semibold mb-2">Mission</p>
                  <p className="text-gray-200 text-sm">
                    Working reliably and effectively to delight our customers by
                    providing workable technology solutions and excellent support.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="#about"
              className="px-6 py-3 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-lg transition-colors"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="flex items-center text-white hover:text-secondary font-semibold transition-colors"
            >
              <span>Contact Us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative order-1 lg:order-2">
          <div className="relative z-10 flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="/assets/code.jpg"
                alt="Laptop with Code running"
                className="w-full h-auto object-cover"
                width={600}
                height={400}
                priority
              />
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary hover:bg-secondary/90 text-white p-3 rounded-full shadow-lg transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-4.586-2.753a1 1 0 00-1.49.868v5.506a1 1 0 001.49.868l4.586-2.753a1 1 0 000-1.736z"
                  />
                </svg>
              </button>
            </div>

            <div className="flex gap-4">
              <div className="flex-1 overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src="/assets/security.jpg"
                  alt="Security"
                  className="w-full h-auto object-cover"
                  width={300}
                  height={200}
                />
              </div>
              <div className="flex-1 overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src="/assets/technology.jpg"
                  alt="Technology"
                  className="w-full h-auto object-cover"
                  width={300}
                  height={200}
                />
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-secondary/30 rounded-full z-0 blur-xl"></div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary/30 rounded-full z-0 blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;