import React from 'react';

const reasons = [
  {
    title: "Expertise",
    text: "Our team comprises seasoned professionals with extensive experience across various domains, ensuring unparalleled expertise in delivering high-quality solutions."
  },
  {
    title: "Innovation",
    text: "We stay ahead of the curve by embracing emerging technologies and methodologies, allowing us to deliver innovative solutions that propel your business forward."
  },
  {
    title: "Client-Centric Approach",
    text: "Our success is our priority. We collaborate closely with you to understand your needs, goals, and challenges, tailoring our solutions to deliver maximum value and exceed your expectations."
  },
  {
    title: "Reliability",
    text: "With a proven track record of delivering successful projects on time and within budget, you can trust us to be your reliable partner every step of the way."
  },
  {
    title: "Product Development",
    text: "If you have an idea for a new product, our team of experts can help you bring it to market. From concept development to prototyping and testing, we work with you every step of the way to ensure your product is a success."
  },
  {
    title: "Project Management",
    text: "Our project management services can help ensure your engineering project is delivered on time and within budget. We work closely with you to develop a project plan, manage resources, and oversee all aspects of the project from start to finish."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-14 px-8 md:px-16">
      
      {/* Section Title */}
      {/* Small, uppercase, wide spacing - exactly like the screenshot */}
      <div className="text-center mb-12">
        <h2 
          className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          WHY CHOOSE US?
        </h2>
      </div>

      {/* 3-Column Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          
          {reasons.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              
              {/* Card Title */}
              <h3 
                className="text-xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                {item.title}
              </h3>

              {/* Card Description */}
              <p 
                className="text-gray-600 text-[15px] leading-loose"
                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
              >
                {item.text}
              </p>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
}