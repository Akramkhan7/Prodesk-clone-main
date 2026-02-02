import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Values from './pages/Values';
import AdminPanel from './pages/AdminPanel';
import Vision from './pages/Vision';
import WhoWeAre from './pages/WhoWeAre';
import WhatWeDo from './pages/WhatWeDo';
import Insights from './pages/Insights';
import SuccessStories from './pages/SuccessStories';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import AiMl from './pages/technologies/AiMl';
import CloudDevOps from './pages/technologies/CloudDevOps';
import ScrollToTop from "./components/ScrollToTop";
import PythonBackend from './pages/technologies/PythonBackend';
import ReactFrontend from './pages/technologies/ReactFrontend';
import MobileTechnologies from './pages/technologies/MobileTechnologies';
import DataAnalytics from './pages/technologies/DataAnalytics';
import Iot from './pages/technologies/Iot';
import CyberSecurity from './pages/technologies/CyberSecurity';
import JavaEnterprise from './pages/technologies/JavaEnterprise';
import Blockchain from './pages/technologies/Blockchain';
import QualityEngineering from './pages/technologies/QualityEngineering';
import RoboticAutomation from './pages/technologies/RoboticAutomation';
import EnterpriseCrm from './pages/technologies/EnterpriseCrm';
import ErpSupplyChain from './pages/technologies/ErpSupplyChain';
import UiUxDesign from './pages/technologies/UiUxDesign';
import EcommerceRetail from './pages/technologies/EcommerceRetail';
import ItInfrastructure from './pages/technologies/ItInfrastructure';
import DigitalMarketing from './pages/technologies/DigitalMarketing';
import ApiIntegration from './pages/technologies/ApiIntegration';
function App() {
  return (
    
    <Router>
      <div className="bg-black min-h-screen flex flex-col lg:flex-row"> {/* Changed flex-direction */}
        
        <Sidebar />

        {/* Main Content */}
        {/* Added 'pt-20' for mobile top bar spacing, removed it on desktop 'lg:pt-0' */}
        <main className="lg:ml-80 flex-1 relative z-0 bg-white pt-20 lg:pt-0">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about-us-1" element={<About />} />
            <Route path="/our-values" element={<Values />} />
            <Route path="/our-vision-1" element={<Vision />} />
            <Route path="/who-we-are-1" element={<WhoWeAre />} />
            <Route path="/what-we-do-1" element={<WhatWeDo />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/technologies/ai-ml" element={<AiMl />} />
            <Route path="/technologies/cloud-devops" element={<CloudDevOps />} />
            <Route path="/technologies/python-backend" element={<PythonBackend />} />
            <Route path="/technologies/react-frontend" element={<ReactFrontend />} />
            <Route path="/technologies/mobile-technologies" element={<MobileTechnologies />} />
            <Route path="/technologies/data-analytics" element={<DataAnalytics />} />
            <Route path="/technologies/internet-of-things" element={<Iot />} />
            <Route path="/technologies/cybersecurity" element={<CyberSecurity />} />
            <Route path="/technologies/java-enterprise" element={<JavaEnterprise />} />
            <Route path="/technologies/blockchain-web3" element={<Blockchain />} />
            <Route path="/technologies/quality-engineering" element={<QualityEngineering />} />
            <Route path="/technologies/robotic-automation" element={<RoboticAutomation />} />
            <Route path="/technologies/crm-solutions" element={<EnterpriseCrm />} />
            <Route path="/technologies/erp-supply-chain" element={<ErpSupplyChain />} />
            <Route path="/technologies/ui-ux-design" element={<UiUxDesign />} />
            <Route path="/technologies/ecommerce-retail" element={<EcommerceRetail />} />
            <Route path="/technologies/it-infrastructure" element={<ItInfrastructure />} />
            <Route path="/technologies/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/technologies/api-integration" element={<ApiIntegration />} />
            <Route path="/admin" element={<AdminPanel />} />
            
          </Routes>
        </main>

      </div>
    </Router>
  )
}
export default App