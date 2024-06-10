import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Footer from "./Footer";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("email");

    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3003/api/dashboard?email=${email}`
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    if (email) {
      fetchUserData();
    } else {
      console.log("Email not found in local storage");
    }
  }, []);

  const [caseData, setCaseData] = useState([]);
  useEffect(() => {
    fetchCases();
  }, []);

  const fetchCases = async () => {
    try {
      const email = localStorage.getItem("email");
      const response = await axios.get(
        `http://localhost:3003/api/dashboardcases?email=${email}`
      );
      setCaseData(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching cases:", error);
    }
  };

  const handleDownloadEvidence = async (caseId) => {
    try {
      const response = await axios.get(
        `http://localhost:3003/api/evidence/${caseId}`,
        { responseType: "blob" } // Set responseType to 'blob' to handle binary data
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${caseId}.pdf`);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error downloading evidence:", error);
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col lg:flex-row bg-gray-100 manrope">
        {/* User Details */}
        <div className="w-full lg:w-1/3 p-6">
          <h2 className="text-lg font-semibold mb-2 text-center">
            User Details
          </h2>
          {userData && (
            <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
              <div className="max-w-screen-lg mx-auto">
                <div className="grid grid-cols-2 gap-y-4 p-5">
                  <div className="text-gray-600 font-semibold">User ID</div>
                  <div className="text-gray-600">{userData.User_ID}</div>
                  <div className="text-gray-600 font-semibold">First Name</div>
                  <div className="text-gray-600">{userData.First_Name}</div>
                  <div className="text-gray-600 font-semibold">Last Name</div>
                  <div className="text-gray-600">{userData.Last_Name}</div>
                  <div className="text-gray-600 font-semibold">Email</div>
                  <div className="text-gray-600">{userData.Email}</div>
                  <div className="text-gray-600 font-semibold">
                    Mobile Number
                  </div>
                  <div className="text-gray-600">{userData.Mobile_Number}</div>
                  <div className="text-gray-600 font-semibold">Address</div>
                  <div className="text-gray-600">{userData.Address}</div>
                  <div className="text-gray-600 font-semibold">City</div>
                  <div className="text-gray-600">{userData.City}</div>
                  <div className="text-gray-600 font-semibold">State</div>
                  <div className="text-gray-600">{userData.State}</div>
                  <div className="text-gray-600 font-semibold">Country</div>
                  <div className="text-gray-600">{userData.Country}</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Case Details */}

        <div className="w-full lg:w-2/3 p-6">
          <h2 className="text-lg font-semibold mb-2 text-center">
            Case Details
          </h2>
          <div className="bg-white shadow-lg rounded-lg overflow-y-auto md:h-[400px]">
            {/* Pending Cases */}
            <div className="mb-2">
              <h2 className="text-lg font-semibold pl-3">User Cases</h2>
              {caseData.map((caseItem) => (
                <div
                  key={caseItem.Case_ID}
                  className="border-b border-gray-200 p-3 flex flex-col items-start justify-between"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    <div className="flex flex-col">
                      <p className="text-gray-600">
                        <span className="font-semibold">Case ID:</span>{" "}
                        {caseItem.Case_ID}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">Complainant ID:</span>{" "}
                        {caseItem.Complainant_ID}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">Respondent Name:</span>{" "}
                        {caseItem.Respondent_Name}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">
                          Respondent Address:
                        </span>{" "}
                        {caseItem.Respondent_Address}
                      </p>

                      <p className="text-gray-600">
                        <span className="font-semibold">
                          Respondent Contact Number:
                        </span>{" "}
                        {caseItem.Respondent_Contact_Number}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-gray-600">
                        <span className="font-semibold">Respondent Email:</span>{" "}
                        {caseItem.Respondent_Email}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">
                          Complaint Description:
                        </span>{" "}
                        {caseItem.Complaint_Description}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">
                          Evidence Description:
                        </span>{" "}
                        {caseItem.Evidence_Description}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">Witness Name:</span>{" "}
                        {caseItem.Witness_Name}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">
                          Witness Contact Number:
                        </span>{" "}
                        {caseItem.Witness_Contact_Number}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center w-full mt-2">
                    <button
                      onClick={() => handleDownloadEvidence(caseItem._id)}
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                      Download Evidence
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#009688]"><Footer></Footer></div>
      
    </div>
  );
};

export default Dashboard;
