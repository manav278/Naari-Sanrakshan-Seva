import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import Aboutus from "./components/Aboutus";
import Home from "./components/Home";
import Knowledgebank from "./components/Knowledgebank";
import Faq from "./components/Faq";
import Login from "./components/Login";
import LoginSignUp from "./components/LoginSignup";
import Success from "./components/payment/Success";
import Failure from "./components/payment/Failure";
import Donate from "./components/payment/Donate";
import Dashboard from "./components/Dashboard";
import Filecomplaint from "./components/Filecomplaint";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/knowledgebank" element={<Knowledgebank />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/sucess" element={<Success />} />
          <Route path="/cancel" element={<Failure />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/filecomplaint" element={<Filecomplaint />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
