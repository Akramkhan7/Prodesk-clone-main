import React from 'react';
import PageLayout from '../components/PageLayout';

export default function Values() {
  // Using a tech/business background that matches the 'Professional/Ethics' vibe
  const heroImage = "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop"; 
  const title = "Welcome to Prodesk";
  const heading = "OUR VALUES";

  return (
    <PageLayout heroImageUrl={heroImage} heroTitle={title} sectionHeading={heading}>
      
      <p>
        At Prodesk, we are more than just a software company. We are a team of
        dedicated professionals who are passionate about leveraging technology to
        drive innovation, quality, and value for our customers. Our core values guide
        everything we do, from developing cutting-edge solutions to providing
        exceptional customer service. Here's a closer look at the values that define us:
      </p>

      <div className="space-y-6 mt-8">
        <p>
          <strong className="text-gray-800 font-bold block mb-1">Innovation:</strong>
          We are constantly pushing the boundaries of what's possible,
          leveraging emerging technologies to develop creative solutions that solve
          complex problems and drive business growth.
        </p>

        <p>
          <strong className="text-gray-800 font-bold block mb-1">Quality:</strong>
          We are committed to delivering high-quality products and services
          that meet or exceed customer expectations, ensuring reliability, security, and
          user satisfaction.
        </p>

        <p>
          <strong className="text-gray-800 font-bold block mb-1">Customer Focus:</strong>
          Our customers are at the heart of everything we do. We
          listen to their needs, understand their challenges, and deliver solutions that
          add real value to their business.
        </p>

        <p>
          <strong className="text-gray-800 font-bold block mb-1">Integrity:</strong>
          We operate with honesty, transparency, and ethical behavior in all
          our business dealings, earning the trust and respect of our customers,
          employees, and partners.
        </p>

        <p>
          <strong className="text-gray-800 font-bold block mb-1">Collaboration:</strong>
          We believe that great ideas come from collaboration. We work
          closely with our customers, partners, and team members to share ideas, solve
          problems, and achieve common goals.
        </p>

        <p>
          <strong className="text-gray-800 font-bold block mb-1">Continuous Improvement:</strong>
          We are committed to continuous learning and
          improvement, regularly reviewing and refining our processes, technologies,
          and strategies to drive efficiency and effectiveness.
        </p>

        <p>
          <strong className="text-gray-800 font-bold block mb-1">Accountability:</strong>
          We take ownership of our actions, decisions, and outcomes,
          holding ourselves accountable for delivering results that matter.
        </p>

        <p>
          <strong className="text-gray-800 font-bold block mb-1">Diversity and Inclusion:</strong>
          We embrace diversity and inclusion, recognizing
          the value of different perspectives and experiences in driving innovation
          and creativity.
        </p>

        <p>
          <strong className="text-gray-800 font-bold block mb-1">Sustainability:</strong>
          We are committed to minimizing our environmental impact
          and supporting sustainable practices, ensuring a better future for generations
          to come.
        </p>

        <p>
          <strong className="text-gray-800 font-bold block mb-1">Community Engagement:</strong>
          We believe in giving back to the communities in
          which we operate, supporting social causes and initiatives that make a positive
          impact on society.
        </p>
      </div>

      <div className="mt-10 space-y-6">
        <p>
          At Prodesk, these values are not just words on a page; they are the foundation
          of who we are and how we operate. We are dedicated to upholding these
          values in everything we do, ensuring that we deliver the best possible
          outcomes for our customers, employees, and community.
        </p>

        <p>
          Join us on our journey of innovation, quality, and value creation. Contact us
          today to learn more about how we can help you achieve your business goals
          with our cutting-edge software solutions.
        </p>
      </div>

    </PageLayout>
  );
}