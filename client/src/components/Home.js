import React from "react";
import Navbar from "./Navbar";
import { useEffect } from "react";
import AOS from "aos";
import mission_shakti from "../assets/mission_shakti.jpeg";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "aos/dist/aos.css";
import "../App.css";
function Faq() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-[#009688] manrope">
      <Navbar></Navbar>
      {/* -------------------------------------- */}
      <section
        class="text-gray-600 body-font mb-[-50px] md:mb-[-120px]"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded animated-image"
            alt="hero"
            src={mission_shakti}
          />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Naari Sanrakshan Seva
            </h1>
            <p class="mb-8 leading-relaxed text-white">
              Every working woman has the fundamental right to work in safe,
              dignified and violence-free conditions. She can file a complaint
              of sexual harassment at workplace with her organisation’s Internal
              Committee or the Local Committee set up by the District Officer.
              With MyAmbar Suraksha Chakra application, you can now find and
              reach your district Local Committee using your phone. If you are
              experiencing or have experienced such harassment in your
              workplace, you can file a complaint here.
            </p>
            <div class="flex justify-center">
              <Link to="/filecomplaint">
                <button class="inline-flex text-white bg-[#282765] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  File a Complaint
                </button>
              </Link>
              <Link
                to="/donate"
                className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              >
                Donate us
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* -------------------------------------- */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="white"
          fill-opacity="1"
          d="M0,192L48,176C96,160,192,128,288,112C384,96,480,96,576,122.7C672,149,768,203,864,229.3C960,256,1056,256,1152,240C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      {/* -------------------------------------- */}

      {/* <!-- component --> */}
      <div
        class="flex-1 bg-white rounded-lg shadow-xl mt-16 p-8"
        data-aos="zoom-in"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-delay="000"
      >
        <h4 class="text-2xl text-gray-900 font-bold">How it Works?</h4>
        <div class="relative px-4">
          <div class="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

          {/* <!-- start::Timeline item --> */}
          <div class="flex items-center w-full my-6 -ml-1.5">
            <div class="w-1/12 z-10">
              <div class="w-3.5 h-3.5 bg-[#7371EE] rounded-full"></div>
            </div>
            <div class="w-11/12">
              <p class="text-lg">Signup</p>
              <p class="text-md text-gray-500">
                Sign up with your name and phone number
              </p>
            </div>
          </div>
          {/* <!-- end::Timeline item --> */}

          {/* <!-- start::Timeline item --> */}
          <div class="flex items-center w-full my-6 -ml-1.5">
            <div class="w-1/12 z-10">
              <div class="w-3.5 h-3.5 bg-[#7371EE] rounded-full"></div>
            </div>
            <div class="w-11/12">
              <p class="text-lg">Filing complaint</p>
              <p class="text-md text-gray-500">
                File your complaint. You will need to file the following
                details: your name, address, phone number, respondent’s name and
                address/contact number, and a description of what happened
              </p>
            </div>
          </div>
          {/* <!-- end::Timeline item --> */}

          {/* <!-- start::Timeline item --> */}
          <div class="flex items-center w-full my-6 -ml-1.5">
            <div class="w-1/12 z-10">
              <div class="w-3.5 h-3.5 bg-[#7371EE] rounded-full"></div>
            </div>
            <div class="w-11/12">
              <p class="text-lg">Uploading proof</p>
              <p class="text-md text-gray-500">
                Upload any proof, explanation, supporting documents in audio or
                video format. This is not mandatory, but if you have it, please
                add.
              </p>
            </div>
          </div>
          {/* <!-- end::Timeline item --> */}

          {/* <!-- start::Timeline item --> */}
          <div class="flex items-center w-full my-6 -ml-1.5">
            <div class="w-1/12 z-10">
              <div class="w-3.5 h-3.5 bg-[#7371EE] rounded-full"></div>
            </div>
            <div class="w-11/12">
              <p class="text-lg">Complaint filed</p>
              <p class="text-md text-gray-500">
                Click on 'file a complaint'. A member of your Local Committee
                will be in touch with you within 24 hours.
              </p>
            </div>
          </div>
          {/* <!-- end::Timeline item --> */}
        </div>
      </div>

      {/* -------------------------------------- */}
      <section
        class="text-gray-600 body-font mt-16 bg-white"
        data-aos="zoom-in-right"
        data-aos-delay="100"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div
          class="container px-5 py-10 mx-auto"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay="400"
        >
          <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p class="leading-relaxed text-lg">
              As women achieve power, the barriers will fall. As society sees
              what women can do, as women see what women can do, there will be
              more women out there doing things, and we’ll all be better off for
              it.
            </p>
            <span class="inline-block h-1 w-10 rounded bg-[#7371EE] mt-8 mb-6"></span>
            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
              Sandra Day O'Connor
            </h2>
            <p class="text-gray-500">
              Former Associate Justice of the Supreme Court of the United States
            </p>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Faq;
