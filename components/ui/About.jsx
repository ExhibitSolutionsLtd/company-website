import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      className="py-12 px-8 max-md:p-5 flex flex-col items-center"
      id="about"
    >
      <h3 className="text-center text-2xl text-primary font-semibold">
        About Us
      </h3>
      <div className="flex mt-10 w-4/5 mx-auto max-md:w-full gap-8 max-md:flex-wrap">
        <div className="w-full">
          <h4 className="text-primary font-semibold max-md:text-center">
            Who We Are
          </h4>
          <p className="text-justify text-sm leading-8">
            Exhibit IT Solutions Limited is a Technology Solutions Provider
            based in Kenya and serving the East African Region. Our core focus
            is provision of IT infrastructure and hardware, Software
            Development, Business Consulting and Training. Our main focus for
            East Africa is to provide our clients with solutions to their
            technology needs from developing of software systems, deploying,
            maintenance and provision of hardware and consumables. We have
            designed and deployed Warehouse Management Systems, Asset Tracking
            and RFID solutions, mobile computing and workforce, POS solutions,
            healthcare technologies solutions within the region. We provide
            broad range of products and solutions as per customer needs through
            strategic partnerships with world brands like Zebra among others. We
            are counted amongst the known service providers of the wide range of
            technology solutions across East Africa and many more.
          </p>
        </div>

        <Image
          src="/assets/people.jpg"
          width={500}
          height={200}
          alt="About Us"
          className="rounded-md"
          style={{ height: "400px" }}
        />
      </div>
    </section>
  );
};

export default About;
