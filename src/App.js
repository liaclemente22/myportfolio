// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ITSupport from "./pages/ITSupport";
import WebDev from "./pages/WebDev";
import RealEstate from "./pages/RealEstate";
import Blogs from "./pages/Blogs";
import AutomatedReset from "./components/AutomatedReset";
import ContactPage from "./pages/ContactPage";
import About from "./pages/About";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
        <Route path="/it-support" element={<Layout><ITSupport /></Layout>} />
        <Route path="/web-dev" element={<Layout><WebDev /></Layout>} />
        <Route path="/real-estate" element={<Layout><RealEstate /></Layout>} />
        <Route path="/blogs" element={<Layout><Blogs /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />


        <Route path="/it-support/automated-password-reset" element={<Layout><AutomatedReset /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
