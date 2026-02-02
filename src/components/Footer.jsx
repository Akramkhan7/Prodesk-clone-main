import React from "react";
import { Link } from "react-router-dom";

const links = [
  { name: "ABOUT US", path: "/about-us-1" },
  { name: "AI & ML", path: "/technologies/ai-ml" },
  { name: "CLOUD COMPUTING & DEVOPS", path: "/technologies/cloud-devops" },
  { name: "PYTHON & BACKEND", path: "/technologies/python-backend" },
  { name: "REACT & MODERN FRONTEND", path: "/technologies/react-frontend" },
  { name: "MOBILE TECHNOLOGIES", path: "/technologies/mobile-technologies" },
  { name: "DATA ANALYTICS", path: "/technologies/data-analytics" },
  { name: "CYBERSECURITY", path: "/technologies/cybersecurity" },
  { name: "JAVA ENTERPRISE SOLUTIONS", path: "/technologies/java-enterprise" },
  { name: "BLOCKCHAIN & WEB3", path: "/technologies/blockchain-web3" },
  { name: "AUTOMATED TESTING", path: "/technologies/quality-engineering" },
  { name: "ROBOTIC AUTOMATION", path: "/technologies/robotic-automation" },
  { name: "ENTERPRISE CRM SOLUTIONS", path: "/technologies/crm-solutions" },
  { name: "ERP & SUPPLY CHAIN", path: "/technologies/erp-supply-chain" },
  { name: "UI/UX DESIGN STUDIO", path: "/technologies/ui-ux-design" },
  { name: "E-COMMERCE & RETAIL", path: "/technologies/ecommerce-retail" },
  { name: "IT INFRASTRUCTURE", path: "/technologies/it-infrastructure" },
  { name: "API INTEGRATION", path: "/technologies/api-integration" },
  { name: "INSIGHTS", path: "/insights" },
  { name: "SUCCESS STORIES", path: "/success-stories" },
  { name: "CAREERS", path: "/careers" },
  { name: "CONTACT", path: "/contact" }
];

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-white border-t border-[#2a2a2a]">

      {/* ================= LINKS ================= */}
      <div className="max-w-6xl mx-auto px-6 pt-14">
        <ul
          className="
            flex flex-col items-center gap-3
            md:flex-row md:flex-wrap md:justify-center md:gap-x-6 md:gap-y-3
          "
        >
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className="
                  uppercase tracking-[0.18em]
                  text-gray-300 hover:text-white transition
                  text-[11px] sm:text-[12px]
                "
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ================= COMPANY INFO ================= */}
      <div className="text-center mt-14 px-6 space-y-4">

        <p className="uppercase tracking-[0.22em] text-[11px]">
          Prodesk IT
        </p>

        <p className="uppercase tracking-[0.14em] text-gray-400 text-[10px] leading-relaxed max-w-3xl mx-auto">
          4th Floor, 91springboard Building, Plot No. D, 107, Vyapar Marg,
          D Block, Sector 2, Noida, Uttar Pradesh 201301
        </p>

        <p className="tracking-[0.14em] text-gray-400 text-[10px]">
          <a href="tel:8851407750" className="hover:text-white transition">
            8851407750
          </a>
        </p>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="mt-16 border-t border-[#2a2a2a]">
        <div
          className="
            max-w-7xl mx-auto px-6 py-6
            flex flex-col items-center gap-3
            md:flex-row md:justify-between
            text-gray-500 uppercase tracking-[0.14em]
            text-[9px] sm:text-[10px]
          "
        >
          <div className="text-center md:text-left">
            <p>Copyright © 2026 Prodesk IT</p>
            <p>All Rights Reserved.</p>
          </div>

          <div className="text-center md:text-right">
            <p>Powered by Net Solutions</p>
          </div>
        </div>
      </div>

    </footer>
  );
}
