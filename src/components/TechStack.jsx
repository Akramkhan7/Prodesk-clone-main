import React from "react";

const logos = [
  { name: "AWS", file: "aws.webp" },
  { name: "TensorFlow", file: "tensorflow.webp" },
  { name: "SAP", file: "sap.webp" },
  { name: "Google Cloud", file: "google.webp" },
  { name: "Microsoft Azure", file: "microsoft.webp" },
  { name: "React", file: "react.webp" },
  { name: "Cisco", file: "cisco.webp" },
  { name: "Python", file: "python.webp" },
  { name: "Salesforce", file: "salesforce.webp" },
  { name: "Ericsson", file: "erricsson.webp" },
  { name: "Bosch", file: "bosch.webp" },
  { name: "Siemens", file: "siemens.webp" },
];

export default function TechStack() {
  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-8">
      {/* Heading */}
      <div className="text-center mb-16 sm:mb-24">
        <h3 className="text-2xl sm:text-3xl font-bold tracking-widest text-gray-800 uppercase">
          Technology Stack
        </h3>
      </div>

      {/* Logos Grid */}
      <div className="max-w-7xl mx-auto">
        <div
          className="
            grid
            grid-cols-2
            gap-y-12 gap-x-8
            place-items-center

            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-6
          "
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="
                flex items-center justify-center w-full
                h-[100px] sm:h-[140px] md:h-[160px]
              "
            >
              <img
                src={`/logos/${logo.file}`}
                alt={`${logo.name} logo`}
                className="
                  h-full
                  w-auto
                  object-contain
                "
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
