import React from 'react';

const stats = [
  {
    number: "15+",
    label: "YEARS OF ENGINEERING EXCELLENCE"
  },
  {
    number: "300+",
    label: "ENTERPRISE-GRADE PROJECTS DELIVERED"
  },
  {
    number: "100%",
    label: "ON-TIME DELIVERY"
  }
];

export default function Stats() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12">
      
      {/* Narrow container like original */}
      <div className="max-w-5xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-6 text-center">
          
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              
              {/* Number */}
              <h3 
                className="text-3xl md:text-5xl font-bold mb-5 tracking-tight"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                {item.number}
              </h3>

              {/* Label */}
              <p 
                className="text-xs md:text-sm font-bold tracking-[0.22em] uppercase text-gray-300 leading-relaxed max-w-[240px]"
                style={{ fontFamily: "Helvetica, Arial, sans-serif" , color:"#ffcf68" }
            }
              >
                {item.label}
              </p>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
}
