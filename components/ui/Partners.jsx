import Image from "next/image";
import React from "react";

const Partners = () => {
  const partners = [
    { id: 1, url: "/assets/partners/zebra.png", alt: "Zebra Logo" },
    { id: 2, url: "/assets/partners/checkpoint.png", alt: "Checkpoint Logo" },
    { id: 3, url: "/assets/partners/cisco.png", alt: "Cisco Logo" },
    { id: 4, url: "/assets/partners/entrust.png", alt: "Entrust Logo" },
    { id: 5, url: "/assets/partners/jabra.png", alt: "Jabra Logo" },
    { id: 6, url: "/assets/partners/juniper.png", alt: "Juniper Logo" },
    { id: 7, url: "/assets/partners/Kaspersky.png", alt: "Kasperskey Logo" },
    { id: 8, url: "/assets/partners/Lenel.png", alt: "Lenel Logo" },
    { id: 9, url: "/assets/partners/ruckus.png", alt: "Ruckus Logo" },
    { id: 10, url: "/assets/partners/schneider.png", alt: "Schneider Logo" },
    { id: 11, url: "/assets/partners/SecuGen.png", alt: "SecuGen Logo" },
    { id: 12, url: "/assets/partners/suprema.png", alt: "Suprema Logo" },
    { id: 13, url: "/assets/partners/ZK_Teco.png", alt: "ZKTeco Logo" },
  ];
  return (
    <div className="w-4/5 mx-auto p-5 mt-6 ">
      <h3 className="text-center text-2xl text-primary font-semibold">
        Our Amazing Partners
      </h3>
      <div className="flex justify-between md:flex-wrap mt-6 gap-4">
        {partners?.map((partner, i) => (
          <Image
            key={partner?.id || i}
            src={partner?.url}
            width={100}
            height={20}
            alt={partner?.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
