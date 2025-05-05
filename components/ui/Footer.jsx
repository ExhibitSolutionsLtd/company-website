import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#9bbfe0] to-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="">
          <Image
            src="/full-logo.png"
            width={200}
            height={30}
            alt="Exhibit IT Solutions logo"
          />
          <p className="text-sm mt-2">
            Questions? Reach us <br />
            Monday – Saturday from 8 am to 5 pm
          </p>
          <div className="mt-1 flex  flex-col gap-y-3">
            <p className="flex gap-x-2 items-center text-md">
              {" "}
              <span>
                <MapPin size={18} />
              </span>{" "}
              Malik Heights, Ngong Rd, 6th Floor, Room 601
            </p>
            <p className="flex gap-x-2 items-center text-md">
              {" "}
              <span>
                <Phone size={18} />
              </span>{" "}
              +254 20 8100101
            </p>
            <p className="flex gap-x-2 items-center text-md">
              {" "}
              <span>
                <Mail size={18} />
              </span>{" "}
              <a href="mailto:info@exhibitsolutions.co.ke" target="_blank">
                info@exhibitsolutions.co.ke
              </a>
            </p>
          </div>
        </div>

        {/* Company Section */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Our Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Showcase
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Web Design & Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Maintenance On IT
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Business Application and Consulting
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                IT Services
              </a>
            </li>
          </ul>
        </div>

        {/* Connect Section */}
        <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=100090401272340&mibextid=ZbWKwL"
              target="_blank"
              className="hover:text-secondary"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/facebook.svg"
                width={30}
                height={30}
                alt="Facebook Logo"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/exhibit-solutions-273857240/"
              target="_blank"
              className="hover:text-secondary"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/linkedin.svg"
                width={30}
                height={30}
                alt="Linkedin Logo"
              />
            </a>
            <a
              href="https://www.x.com/ExhibitSolutio2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary"
            >
              <Image
                src="/assets/twitter.svg"
                width={30}
                height={30}
                alt="twitter Logo"
              />
            </a>
            <a
              href="https://www.instagram.com/exhibitsolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary"
            >
              <Image
                src="/assets/instagram.svg"
                width={30}
                height={30}
                alt="instagram Logo"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center text-sm text-white mt-12">
        <p>© 2025. All Rights Reserved.</p>
        <p className="mt-2">Exhibit IT solutions </p>
      </div>
    </footer>
  );
};

export default Footer;
