import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"
// Components
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Error404 from "./pages/Error404";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { AppSidebar } from "./components/Sidebar";
import { SidebarTrigger } from "./components/ui/sidebar";


function App() {

  return (
  <Router>
    <AppSidebar />
    <SidebarTrigger />
    <Toaster/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/signup" element={<Signup />} /> */}

      <Route path="*" element={<Error404 />} />
    </Routes>

  </Router>
  )
}

export default App
