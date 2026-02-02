import React from 'react';
import PageLayout from '../components/PageLayout';

export default function SuccessStories() {
  // Image from your request
  const heroImage = "/successStories.png"; 
  const title = "Welcome to Prodesk";
  const heading = "SUCCESS STORIES & CASE STUDIES";

  return (
    <PageLayout heroImageUrl={heroImage} heroTitle={title} sectionHeading={heading}>
      
      {/* Intro Section */}
      <p>
        <strong className="text-gray-800 font-semibold block mb-2">
          Engineering Impact: Real World Results
        </strong>
        At Prodesk IT, we measure success not by the lines of code we write, but by the business value we deliver. Our portfolio spans complex enterprise transformations, rapid product launches, and critical infrastructure modernizations. Below is a selection of anonymized case studies demonstrating how we solve the toughest engineering challenges for our partners.
      </p>

      {/* Case Study 1: Logistics */}
      <div className="mt-8 space-y-4">
        <p>
          <strong className="text-gray-800 font-semibold block uppercase tracking-wide">
            CASE STUDY 1: LOGISTICS & SUPPLY CHAIN
          </strong>
        </p>
        
        <p>
          <strong className="text-gray-800 font-semibold">Project: </strong> 
          Cloud Migration and Real-Time Tracking System
        </p>

        <p>
          <strong className="text-gray-800 font-semibold">The Challenge: </strong> 
          A regional logistics provider was struggling with legacy on-premise servers that crashed during peak shipping seasons. Their tracking system had a 4-hour data delay, causing customer frustration and high support call volumes.
        </p>

        <div>
          <strong className="text-gray-800 font-semibold block mb-2">The Prodesk Solution:</strong>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>
              <strong className="text-gray-800 font-semibold">Cloud Architecture: </strong>
              We migrated their core ERP and database to <strong className="text-gray-800 font-semibold">AWS</strong>, utilizing Auto-Scaling Groups to handle traffic spikes automatically.
            </li>
            <li>
              <strong className="text-gray-800 font-semibold">IoT Integration: </strong>
              We equipped their fleet with GPS-enabled IoT sensors that push location data every 30 seconds.
            </li>
            <li>
              <strong className="text-gray-800 font-semibold">Mobile App: </strong>
              We built a cross-platform (Flutter) driver app for digital proof-of-delivery.
            </li>
          </ul>
        </div>

        <div>
          <strong className="text-gray-800 font-semibold block mb-2">The Result:</strong>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>
              <strong className="text-gray-800 font-semibold">99.99% Uptime </strong>
              achieved during the busiest holiday season.
            </li>
            <li>
              <strong className="text-gray-800 font-semibold">Real-Time Visibility </strong>
              reduced customer support calls by 60%.
            </li>
            <li>
              <strong className="text-gray-800 font-semibold">30% Reduction </strong>
              in IT maintenance costs by moving to the cloud.
            </li>
          </ul>
        </div>
      </div>

      {/* Case Study 2: Ed-Tech */}
      <div className="mt-12 space-y-4">
        <p>
          <strong className="text-gray-800 font-semibold block uppercase tracking-wide">
            CASE STUDY 2: ED-TECH & CAMPUS RECRUITMENT
          </strong>
        </p>
        
        <p>
          <strong className="text-gray-800 font-semibold">Project: </strong> 
          AI-Driven Proctoring & Assessment Platform
        </p>

        <p>
          <strong className="text-gray-800 font-semibold">The Challenge: </strong> 
          An educational institution needed to conduct secure, offline-capable coding assessments for thousands of students simultaneously across campuses with unreliable internet connectivity.
        </p>

        <div>
          <strong className="text-gray-800 font-semibold block mb-2">The Prodesk Solution:</strong>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>
              <strong className="text-gray-800 font-semibold">Offline-First Architecture: </strong>
              We engineered a desktop application that downloads exam papers securely and runs locally.
            </li>
            <li>
              <strong className="text-gray-800 font-semibold">AI Proctoring: </strong>
              We integrated computer vision algorithms to monitor the candidate’s webcam feed for suspicious activity (like multiple faces or looking away) without sending video to the cloud.
            </li>
            <li>
              <strong className="text-gray-800 font-semibold">Automated Grading: </strong>
              We built a Python-based backend to compile and grade code submissions instantly.
            </li>
          </ul>
        </div>

        <div>
          <strong className="text-gray-800 font-semibold block mb-2">The Result:</strong>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>
              <strong className="text-gray-800 font-semibold">50,000+ Assessments </strong>
              conducted seamlessly with zero data loss.
            </li>
            <li>
              <strong className="text-gray-800 font-semibold">90% Reduction </strong>
              in manual grading time for faculty.
            </li>
            <li>
              <strong className="text-gray-800 font-semibold">Fraud Detection: </strong>
              Successfully flagged and prevented malpractice in remote exams.
            </li>
          </ul>
        </div>
      </div>

      {/* Case Study 3: E-Commerce */}
      <div className="mt-12 space-y-4">
        <p>
          <strong className="text-gray-800 font-semibold block uppercase tracking-wide">
            CASE STUDY 3: E-COMMERCE & RETAIL
          </strong>
        </p>
        
        <p>
          <strong className="text-gray-800 font-semibold">Project: </strong> 
          Omnichannel High-Performance Storefront
        </p>

        <p>
          <strong className="text-gray-800 font-semibold">The Challenge: </strong> 
          A fashion retail brand was experiencing slow page loads and high cart abandonment rates on mobile devices. Their legacy Magento site was bloated and difficult to update.
        </p>

        <div>
          <strong className="text-gray-800 font-semibold block mb-2">The Prodesk Solution:</strong>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>
              <strong className="text-gray-800 font-semibold">Headless Commerce: </strong>
              We decoupled the frontend from the backend, building a lightning-fast <strong className="text-gray-800 font-semibold">Next.js</strong> frontend (PWA) that loads instantly.
            </li>
            <li>
              <strong className="text-gray-800 font-semibold">UX Overhaul: </strong>
              We redesigned the checkout flow to be "thumb-friendly," reducing the steps to purchase from 5 to 2.
            </li>
            <li>
              <strong className="text-gray-800 font-semibold">Personalization: </strong>
              We implemented an AI recommendation engine to suggest products based on browsing behavior.
            </li>
          </ul>
        </div>

        <div>
          <strong className="text-gray-800 font-semibold block mb-2">The Result:</strong>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>
              <strong className="text-gray-800 font-semibold">200% Increase </strong>
              in mobile conversion rates.
            </li>
            <li>
              <strong className="text-gray-800 font-semibold">Sub-Second </strong>
              page load speeds, boosting SEO rankings.
            </li>
            <li>
              <strong className="text-gray-800 font-semibold">25% Increase </strong>
              in Average Order Value (AOV) via personalized upsells.
            </li>
          </ul>
        </div>
      </div>

      {/* Case Study 4: FinTech */}
      <div className="mt-12 space-y-4">
        <p>
          <strong className="text-gray-800 font-semibold block uppercase tracking-wide">
            CASE STUDY 4: FINTECH & SECURITY
          </strong>
        </p>
        
        <p>
          <strong className="text-gray-800 font-semibold">Project: </strong> 
          Secure KYC and Document Processing Pipeline
        </p>

        <p>
          <strong className="text-gray-800 font-semibold">The Challenge: </strong> 
          A financial services firm was manually processing thousands of KYC documents (Passports, IDs), leading to a 3-day backlog and human error.
        </p>

        <div>
          <strong className="text-gray-800 font-semibold block mb-2">The Prodesk Solution:</strong>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>
              <strong className="text-gray-800 font-semibold">Intelligent Automation: </strong>
              We deployed an <strong className="text-gray-800 font-semibold">OCR (Optical Character Recognition)</strong> pipeline using Python and Deep Learning models to extract text from scanned IDs automatically.
            </li>
            <li>
              <strong className="text-gray-800 font-semibold">Fraud Check: </strong>
              We integrated third-party APIs to validate identity data against government databases in real-time.
            </li>
            <li>
              <strong className="text-gray-800 font-semibold">Security: </strong>
              We implemented bank-grade encryption for data at rest and ensured full GDPR compliance.
            </li>
          </ul>
        </div>

        <div>
          <strong className="text-gray-800 font-semibold block mb-2">The Result:</strong>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>
              <strong className="text-gray-800 font-semibold">Instant Approvals: </strong>
              Reduced customer onboarding time from 3 days to 5 minutes.
            </li>
            <li>
              <strong className="text-gray-800 font-semibold">99.5% Accuracy </strong>
              in data extraction, eliminating manual entry errors.
            </li>
            <li>
              <strong className="text-gray-800 font-semibold">Scalability: </strong>
              The system now handles 10x the volume without adding new staff.
            </li>
          </ul>
        </div>
      </div>

    </PageLayout>
  );
}