import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

/* ================= MENU DATA ================= */

const subMenus = {
  about: [
    { name: "About Us", href: "/about-us-1" },
    { name: "Our Values", href: "/our-values" },
    { name: "Our Vision", href: "/our-vision-1" },
    { name: "Who We Are", href: "/who-we-are-1" },
    { name: "What We Do", href: "/what-we-do-1" },
  ],

  products: [
    { name: "Software Development", href: "#" },
    { name: "Web Development", href: "/technologies/cloud-devops" },
    { name: "Mobile App Development", href: "#" },
    { name: "CRM Solutions", href: "#" },
    { name: "HRM Software", href: "#" },
    { name: "Healthcare Systems", href: "#" },
    { name: "Cloud Services", href: "#" },
    { name: "Data Analytics", href: "#" },
    { name: "AI & Machine Learning", href: "#" },
    { name: "Consulting & IT Strategy", href: "#" },
    { name: "Cybersecurity Services", href: "#" },
    { name: "Logo Design", href: "#" },
    { name: "Internet of Things (IoT)", href: "#" },
  ],

  technologies: [
    { name: "AI & ML", href: "/technologies/ai-ml" },
    { name: "Cloud Computing & DevOps", href: "/technologies/cloud-devops" },
    { name: "Python & Backend", href: "/technologies/python-backend" },
    { name: "React & Modern Frontend", href: "/technologies/react-frontend" },
    { name: "Mobile Technologies", href: "/technologies/mobile-technologies" },
    { name: "Data Analytics", href: "/technologies/data-analytics" },
    { name: "Internet of Things (IoT)", href: "/technologies/internet-of-things" },
    { name: "Cybersecurity", href: "/technologies/cybersecurity" },
    { name: "Java Enterprise Solutions", href: "/technologies/java-enterprise" },
    { name: "Blockchain & Web3", href: "/technologies/blockchain-web3" },
    { name: "Automated Testing", href: "/technologies/quality-engineering" },
    { name: "Robotic Automation", href: "/technologies/robotic-automation" },
    { name: "Enterprise CRM Solutions", href: "/technologies/crm-solutions" },
    { name: "ERP & Supply Chain", href: "/technologies/erp-supply-chain" },
    { name: "UI/UX Design Studio", href: "/technologies/ui-ux-design" },
    { name: "E-Commerce & Retail", href: "/technologies/ecommerce-retail" },
    { name: "IT Infrastructure", href: "/technologies/it-infrastructure" },
    { name: "Digital Marketing", href: "/technologies/digital-marketing" },
    { name: "API Integration", href: "/technologies/internet-of-things" },
  ],
};

/* ================= COMPONENT ================= */

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  /* Lock body scroll on mobile menu */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  const toggleMenu = (menu) =>
    setActiveMenu(activeMenu === menu ? null : menu);

  const closeAll = () => {
    setMobileOpen(false);
    setActiveMenu(null);
  };

  return (
    <>
      {/* ================= MOBILE TOP BAR ================= */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-black text-white z-50 border-b border-gray-800">
        <div className="h-32 flex items-center justify-center relative px-6">
          <button
            className="absolute left-6 p-2"
            onClick={() => setMobileOpen(true)}
          >
            <Bars3Icon className="h-8 w-8" />
          </button>

          <Link to="/home" onClick={closeAll}>
            <img
              src="/logo.webp"
              alt="Prodesk"
              className="h-24 sm:h-28 w-auto object-contain"
            />
          </Link>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-[100] bg-black text-white lg:hidden
        transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <nav
          className={`fixed inset-0 z-50
          flex flex-col items-center
          space-y-6 pt-36 pb-20
          text-lg tracking-widest font-bold
          bg-black
          overflow-y-auto`}
        >
          <Link to="/home" onClick={closeAll}>HOME</Link>

          {["about", "products", "technologies"].map((menu) => (
            <div key={menu} className="text-center w-full px-10">
              <button
                onClick={() => toggleMenu(menu)}
                className="flex items-center justify-center gap-2 mx-auto uppercase"
              >
                {menu}
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform ${
                    activeMenu === menu ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeMenu === menu && (
                <div className="mt-6 space-y-4 text-sm text-gray-400">
                  {subMenus[menu].map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={closeAll}
                      className="block hover:text-white"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* FIXED LINKS */}
          <Link to="/insights" onClick={closeAll}>INSIGHTS</Link>
          <Link to="/success-stories" onClick={closeAll}>SUCCESS STORIES</Link>
          <Link to="/careers" onClick={closeAll}>CAREERS</Link>
          <Link to="/contact" onClick={closeAll}>CONTACT</Link>
          <Link to="/admin" onClick={closeAll}>ADMIN PANEL</Link>
        </nav>

        {/* ✅ CLOSE BUTTON (FIXED) */}
        <button
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[60]"
          onClick={closeAll}
        >
          <XMarkIcon className="h-8 w-8 text-gray-400 hover:scale-110 transition-transform duration-300" />
        </button>
      </div>

      {/* ================= DESKTOP SIDEBAR ================= */}
      <div className="hidden lg:flex fixed left-0 top-0 h-screen w-80 bg-black text-white z-50 flex-col border-r border-gray-900">
        <div className="px-8 py-10 flex justify-center">
          <Link to="/home">
            <img
              src="/logo.webp"
              alt="Prodesk Logo"
              className="w-[220px] h-auto object-contain"
            />
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto px-8 space-y-6 pb-10 tracking-widest text-sm">
          <Link to="/home" className="block text-gray-400 hover:text-white">
            HOME
          </Link>

          {["about", "products", "technologies"].map((menu) => (
            <button
              key={menu}
              onClick={() => toggleMenu(menu)}
              className="w-full flex justify-between text-gray-400 hover:text-white uppercase"
            >
              {menu}
              <ChevronRightIcon
                className={`h-4 w-4 transition-transform ${
                  activeMenu === menu ? "rotate-90" : ""
                }`}
              />
            </button>
          ))}

          <Link to="/insights" className="block text-gray-400 hover:text-white">
            INSIGHTS
          </Link>
          <Link to="/success-stories" className="block text-gray-400 hover:text-white">
            SUCCESS STORIES
          </Link>
          <Link to="/careers" className="block text-gray-400 hover:text-white">
            CAREERS
          </Link>
          <Link to="/contact" className="block text-gray-400 hover:text-white">
            CONTACT
          </Link>
          <Link to="/admin" className="block text-gray-400 hover:text-white">
            ADMIN PANEL
          </Link>
        </nav>
      </div>

      {/* ================= DESKTOP OVERLAY ================= */}
      {activeMenu && (
        <div
          className="hidden lg:block fixed inset-0 bg-black/40 z-30"
          onClick={() => setActiveMenu(null)}
        />
      )}

      {/* ================= DESKTOP SUBMENU ================= */}
      <div
        className={`hidden lg:block fixed top-0 left-80 h-screen w-80 bg-[#1a1a1a] z-40
        transition-transform duration-300
        ${activeMenu ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="h-full overflow-y-auto p-8">
          {activeMenu &&
            subMenus[activeMenu].map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-3 text-sm text-gray-400 hover:text-white border-b border-gray-800"
                onClick={() => setActiveMenu(null)}
              >
                {item.name}
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
