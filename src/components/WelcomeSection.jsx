import React from 'react';
import { Link } from "react-router-dom";

const cards = [
  {
    title: "Welcome",
    image: "https://img1.wsimg.com/isteam/getty/1403076993/:/cr=t:0%25,l:24.99%25,w:50.02%25,h:100%25/rs=w:365,h:487,cg:true",
    text: "We are experts in developing business-oriented solutions. Since 2012, we have been translating the needs and goals of our customers into reliable software where utility, ease of use and efficiency are key factors and where state-of-the-art technical solutions minimize both future operational costs and risks."
  },
  {
    title: "PRODESK IT",
    image: "https://img1.wsimg.com/isteam/getty/1354205521/:/cr=t:0%25,l:28.91%25,w:42.19%25,h:100%25/rs=w:365,h:487,cg:true",
    text: "At Prodesk, we are more than just a software company. We are a team of dedicated professionals who are passionate about leveraging technology to drive innovation, quality, and value for our customers. Our core values guide everything we do, from developing cutting-edge solutions to providing exceptional customer service."
  },
  {
    title: "Our Mission",
    image: "https://img1.wsimg.com/isteam/getty/2155123808/:/cr=t:0%25,l:30.23%25,w:39.54%25,h:100%25/rs=w:365,h:487,cg:true",
    text: "We strive to empower businesses to thrive in the digital age by providing cutting-edge technology solutions that drive efficiency, productivity, and growth. Our mission is to be the trusted partner that harnesses the power of technology to solve complex challenges and unlock new opportunities for our clients."
  }
];

export default function WelcomeSection() {
  return (
    <section className="bg-white pb-20 px-8 md:px-16">
      
      {/* Section Heading */}
      <div className="text-center mb-16 pt-10">
        <h2 
          className="text-lg md:text-xl font-bold tracking-widest text-gray-600 uppercase"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          Welcome to Prodesk IT - Empowering Your Digital Future
        </h2>
      </div>

      {/* 3 Column Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            
            {/* Image */}
            <div className="w-full h-[400px] mb-8 overflow-hidden">
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Title */}
            <h3 
              className="text-2xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              {card.title}
            </h3>

            {/* Text */}
            <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base font-light">
              {card.text}
            </p>

            {/* Button */}
            <div className="mt-auto">
              <Link
                to="/about-us-1"
                className="inline-block border border-gray-900 text-gray-900 px-8 py-3 text-sm font-bold tracking-widest uppercase
                           hover:bg-gray-900 hover:text-white transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
