import React from "react";
import { useEffect } from "react";
import Navbar from "./Navbar";
import about from "../assets/about.png";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";
function Aboutus() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <section
        class="text-gray-600 body-font"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={about}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About{" "}
              <span className="text-[#2EAF7D]">Naari Sanrakshan Seva</span>
            </h1>
            <p
              class="mb-8 leading-relaxed"
              style={{ fontSize: "18px", fontWeight: "400" }}
            >
              Naari Sanrakshan Seva is an initiative to create an online
              platform for women to be able to file complaints of sexual
              harassment at workplace with their Local Committees with ease. The
              App also supports Local Committees to keep in touch with aggrieved
              women, and manage their complaints in a time-bound manner.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-[#7371EE] border-0 py-2 px-6 focus:outline-none rounded text-lg">
                File a Complaint
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#009688]">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Aboutus;
