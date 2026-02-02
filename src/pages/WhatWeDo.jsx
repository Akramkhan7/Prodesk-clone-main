import React from 'react';
import PageLayout from '../components/PageLayout';

export default function WhatWeDo() {
  // High-tech image showing interaction with complex digital networks/interfaces
  const heroImage = "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop";
  const title = "Welcome to Prodesk";
  const heading = "WHAT WE DO";

  return (
    <PageLayout heroImageUrl={heroImage} heroTitle={title} sectionHeading={heading}>
      
      <p>
        <strong className="text-gray-800 font-semibold">
          We Solve Impossible Problems.
        </strong>
      </p>

      <p>
        Prodesk IT is a full-service software engineering partner. We don't just fill 
        seats; we take end-to-end ownership of your most critical technology initiatives. 
        From envisioning a new digital product to modernizing legacy systems, we bring 
        the expertise, process, and top-tier talent required to execute flawlessly.
      </p>

      <div className="space-y-8 mt-10">
        
        {/* Core Services Section */}
        <div>
          <h3 className="text-gray-900 font-bold text-lg mb-4 uppercase tracking-wide">Our Core Services</h3>
          
          <div className="space-y-6">
            <div>
              <strong className="text-gray-800 font-bold block mb-1">Custom Software Development:</strong>
              We build bespoke applications tailor-made for your specific business needs. 
              Whether it's a complex enterprise platform, a high-performance mobile app, 
              or a sleek web interface, we engineer it for scalability and speed.
            </div>

            <div>
              <strong className="text-gray-800 font-bold block mb-1">Cloud & DevOps Transformation:</strong>
              We help you migrate to the cloud, optimize your infrastructure, and 
              implement CI/CD pipelines that accelerate deployment cycles from weeks to minutes.
            </div>

            <div>
              <strong className="text-gray-800 font-bold block mb-1">AI & Data Analytics:</strong>
              We turn raw data into actionable intelligence. From predictive modeling and 
              machine learning to real-time data visualization, we help you unlock the hidden value in your data.
            </div>

            <div>
              <strong className="text-gray-800 font-bold block mb-1">IT Strategy & Consulting:</strong>
              We don't just build; we advise. Our senior strategists work closely with your 
              leadership team to align technology investments with long-term business goals, ensuring maximum ROI.
            </div>
          </div>
        </div>

        {/* How We Do It Section */}
        <div>
          <h3 className="text-gray-900 font-bold text-lg mb-2 uppercase tracking-wide">How We Do It</h3>
          <p>
            <strong className="text-gray-800 font-semibold">The Prodesk Agile Framework.</strong> We 
            believe in rapid iteration and continuous delivery. Our methodology combines the best 
            practices of Scrum and Kanban, adapted for the speed of modern business. We operate in 
            short sprints, delivering tangible value at every stage, ensuring total transparency 
            and the flexibility to pivot as market needs change.
          </p>
        </div>

        {/* Who We Serve Section */}
        <div>
          <h3 className="text-gray-900 font-bold text-lg mb-2 uppercase tracking-wide">Who We Serve</h3>
          <p>
            We work with organizations that view technology as a competitive advantage. 
            Our clients range from VC-backed startups needing to launch an MVP quickly, to Fortune 
            500 enterprises seeking to modernize complex legacy systems. If you have a difficult 
            technical challenge and high standards for execution, we are the partner for you.
          </p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="pt-8 mt-8 border-t border-gray-100">
        <h3 className="text-gray-900 font-bold text-lg mb-2 uppercase tracking-wide">Ready to Build the Future?</h3>
        <p className="font-medium text-gray-800">
          Let's talk about your next project.
        </p>
      </div>

    </PageLayout>
  );
}