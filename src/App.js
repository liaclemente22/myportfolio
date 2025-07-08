import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ITSupport from "./pages/ITSupport";
import WebDev from "./pages/WebDev";
import RealEstate from "./pages/RealEstate";
import Blog from "./pages/Blog";
import BlogList from "./components/BlogList";
import AutomatedReset from './components/AutomatedReset';
import Portfolio from "./pages/Portfolio";
import ContactPage from "./pages/ContactPage";



function App() {
  return (
    <Router>  {/* Ensure Router is wrapping everything correctly */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/it-support" element={<ITSupport />} />
        <Route path="/web-dev" element={<WebDev />} />
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/it-support/blogs/:id" element={<Blog />} />  {/* Dynamic route */}
        <Route path="/blog/get-all" element={<BlogList />} />
        <Route path="/contact" element={<ContactPage />} />



        <Route path="it-support/automated-password-reset" element={<AutomatedReset />} />
      </Routes>
    </Router>
  );
}

export default App;
