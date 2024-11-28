import React from "react";
import SoftwareList from "./List";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const softwares = [
  {
    id: 1,
    title: "School Management System - ProShule",
    description: `ProShule is a game-changer school management system developed by Exhibit IT Solutions Limited’s experienced team of industry professionals to address key challenges faced by both schools’ management, students, and parents.
     Our school management system manages and automates the end-to-end operations of a school including interface with the parents and the students. Our system acts as a bridge between the administrative members, parents, teachers, and students. This software is also an interactive site where the exchange of information, data, funds, or
     statistics is done. Proshule tracks student attendance and transport through biometric verification of both face and fingerprint.`,
    image: "/assets/softwares/ProShule.png",
  },
  {
    id: 2,
    title: "Fleet Management System - TruckTrail",
    description: `TruckTrail is a robust fleet management systems that helps truck owners manage their vehicles. It involves incorporation of devices like Fuel Sensors - to 
    monitor fuel usage when a vehicle is in transit, GPS trackers to track the vehicle in real time and cameras to monitor driver behaviours and also take a snapshot when there is an unsual fuel behaviour`,
    image: "/assets/softwares/fleet.png",
  },
  {
    id: 3,
    title: "Healthcare RFID Tracking System - AfyaTrail",
    description: `Our hospital RFID tracking system is aimed at enhancing patient identification and tracking by installing and
       configuring the necessary software to integrate RFID wristbands and readers into the hospital management system of the hospital. 
       The system is expandable to track equipment, blood bands, and transplant organs among other hospital elements.
       AfyaTrail is the first Healthcare System in East Africa to utilize RFID technology, revolutionizing patient care and health services. `,
    image: "/assets/softwares/AfyaTrail.jpeg",
  },
  {
    id: 4,
    title: "Showroom Management System",
    description: `Showroom Management System is cutting-edge software solutions to efficiently manage your vehicles, streamline sales processes, 
        and effectively track overdue payments. Our robust software platform is designed to meet the unique needs of automotive businesses.
        With our comprehensive suite of features, including vehicle management, sales tracking, and automated overdue payment reminders, we 
        provide you with a powerful tool to optimize your operations and stay ahead in a competitive market. `,
    image: "/assets/softwares/showroom.png",
  },
  {
    id: 5,
    title: "Point of Sale(PoS)",
    description: `Introducing our state-of-the-art Point-of-Sale system, branded QuickPick, that revolutionizes your business operations. With PoS, 
        you gain an all-in-one solution that seamlessly manages clients, suppliers, inventory, sales, invoices, purchases, barcode generation, and 
        user permissions. Our intuitive platform empowers you to efficiently track and nurture client relationships, streamline supplier management, 
        and optimize inventory control. Experience the convenience of generating accurate invoices, managing purchases, and effortlessly creating 
        barcodes for your products.We take pride in our system’s unique ability to handle both queue burst and self-checkout functionalities! Simplify
         and supercharge your business processes with PoS, the ultimate point-of-sale system tailored to meet your unique needs.`,
    image: "/assets/softwares/PoS.png",
  },
  {
    id: 6,
    title: "Poultry Management System",
    description: `Here also comes the Poultry Management System (PMS), your ultimate partner in poultry farming! Our state-of-the-art poultry management 
        software is designed to transform your farming operations, bringing efficiency and profitability right at your fingertips. From the first chirp of 
        your chicks to the cluck of your mature hens, the Poultry Management System is there every step of the way. Our comprehensive suite of tools offers 
        seamless production planning, meticulous record-keeping, and insightful analytics, all tailored to your unique farming needs. Whether you’re managing 
        broilers, breeders, or layers, the PMS has got you covered. Our user-friendly interface and innovative features make poultry management a breeze, 
        freeing you to focus on what you do best – raising healthy, productive birds. With the PMS, you’re not just managing your poultry farm, you’re nurturing success. `,
    image: "/assets/softwares/Poultry-Management.png",
  },
];

const Softwares = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        home="/"
        about="/#about"
        services="/#services"
        contact="/#contact"
      />

      <main className="flex-grow">
        <SoftwareList softwares={softwares} />
      </main>

      <Footer />
    </div>
  );
};

export default Softwares;
