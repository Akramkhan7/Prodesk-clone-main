import React from 'react';
import PageLayout from '../components/PageLayout';

export default function WhoWeAre() {
  // Image: Professional Tech Team / Collaboration
  const heroImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop";
  const title = "Welcome to Prodesk";
  const heading = "WHO WE ARE";

  return (
    <PageLayout heroImageUrl={heroImage} heroTitle={title} sectionHeading={heading}>
      
      <p>
        <strong className="text-gray-800 font-semibold">
          A Global Collective of Innovators.
        </strong>
      </p>

      <p>
        At Prodesk, we are more than just a consultancy; we are a collective of 
        engineers, strategists, and innovators dedicated to solving the most complex 
        challenges in the digital landscape. Founded on the principles of engineering 
        excellence and transparency, we have grown from a small group of passionate 
        coders into a global workforce supporting enterprises around the world.
      </p>

      <div className="space-y-6 mt-8">
        <div>
          <h3 className="text-gray-900 font-bold text-lg mb-2">Our DNA</h3>
          <p>
            Our DNA is rooted in problem-solving. We don't just write code; we architect 
            solutions. Our team is composed of industry veterans and top-tier talent 
            specializing in Cloud Computing, AI, DevOps, and Custom Software Development. 
            We are united by a single mission: to build technology that matters.
          </p>
        </div>

        <div>
          <h3 className="text-gray-900 font-bold text-lg mb-2">Global Reach, Local Impact</h3>
          <p>
            With delivery centers across multiple time zones, we offer a "follow-the-sun" 
            workflow that ensures your projects are moving forward 24/7. However, we 
            maintain the agility and personalized attention of a local boutique firm. 
            When you work with us, you aren't just a ticket number; you are a partner.
          </p>
        </div>

        <div>
          <h3 className="text-gray-900 font-bold text-lg mb-2">Why We Exist</h3>
          <p>
            We exist to bridge the gap between business ambition and technical reality. 
            Too often, digital transformation initiatives fail due to poor execution 
            or misalignment with business goals. We are here to change that narrative 
            by delivering software that is robust, scalable, and directly aligned with 
            your bottom line.
          </p>
        </div>
      </div>

      <div className="pt-8 mt-8 border-t border-gray-100">
        <p className="font-semibold text-gray-800">
          We are builders. We are partners. We are Prodesk.
        </p>
      </div>

    </PageLayout>
  );
}