import React from 'react';

const services = [
  {
    title: "Custom Software Development",
    image: "/services/custom.webp",
    text: "Tailored software solutions designed to meet your unique business requirements, from web applications to mobile apps and beyond."
  },
  {
    title: "IT Consulting",
    image: "/services/itconsulting.webp",
    text: "Expert guidance and strategic advice to help you navigate the ever-evolving landscape of technology, ensuring your IT infrastructure aligns with your business goals."
  },
  {
    title: "Cybersecurity",
    image: "/services/cyber.webp",
    text: "Comprehensive security measures to protect your valuable assets and sensitive data against evolving cyber threats, safeguarding your business continuity and reputation."
  },
  {
    title: "Cloud Services",
    image: "/services/cloud.webp",
    text: "Scalable and secure cloud solutions to streamline operations, enhance collaboration, and enable seamless access to data from anywhere, anytime."
  },
  {
    title: "Data Analytics",
    image: "/services/dataanalytics.webp",
    text: "Infrastructure Actionable insights derived from data analysis to drive informed decision-making and gain a competitive edge in today's data-driven marketplace."
  },
  {
    title: "Mobile App Development",
    image: "/services/mobileapp.webp",
    text: "We provide mobile application development services to startups, SMEs, and blue-chip companies. We have been delivering custom mobile app development services since 2012."
  },
  {
    title: "Web Development",
    image: "/services/webdev.webp",
    text: "Our Website development services are not just about building websites. Basically, it includes all activities from registering domain names, hosting servers and email hosting to storage and routing."
  },
  {
    title: "Digital Transformation",
    image: "/services/digital.webp",
    text: "Leveraging Artificial Intelligence, IoT, and Blockchain to reinvent business models and automate complex workflows."
  }
];

export default function Services() {
  return (
    <section className="bg-white py-16 px-8 md:px-16">
      
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 
          className="text-3xl font-bold tracking-widest text-gray-900 uppercase"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          SERVICES
        </h2>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              
              {/* Circular Image */}
              <div className="mb-8 w-54 h-54 rounded-full overflow-hidden shadow-lg ">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform "
                />
              </div>

              {/* Title */}
              <h3 
                className="text-lg font-bold text-gray-900 mb-6 leading-tight"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p 
                className="text-gray-600 text-sm leading-relaxed"
                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
              >
                {service.text}
              </p>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
}