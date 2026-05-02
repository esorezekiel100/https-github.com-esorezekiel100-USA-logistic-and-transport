import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Fleet from "./pages/Fleet";
import Quote from "./pages/Quote";
import Track from "./pages/Track";
import Contact from "./pages/Contact";

import StartShipment from "./pages/StartShipment";
import BecomeAgent from "./pages/BecomeAgent";
import DriverOnboarding from "./pages/DriverOnboarding";
import DriverDashboard from "./pages/DriverDashboard";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/track" element={<Track />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/start-shipment" element={<StartShipment />} />
          <Route path="/become-agent" element={<BecomeAgent />} />
          <Route path="/driver-onboarding" element={<DriverOnboarding />} />
          <Route path="/driver-dashboard" element={<DriverDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}
