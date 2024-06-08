import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("email");

    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:3003/api/dashboard");
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

  const caseData = [
    {
      caseId: 101,
      description: "Domestic Violence",
      date: "2024-05-01",
      status: "Open",
      location: "City A",
      assignedTo: "Social Worker 1",
      // Add more attributes as needed
    },
    {
      caseId: 102,
      description: "Workplace Discrimination",
      date: "2024-05-15",
      status: "Closed",
      location: "City B",
      assignedTo: "Social Worker 2",
      // Add more attributes as needed
    },
    {
      caseId: 102,
      description: "Workplace Discrimination",
      date: "2024-05-15",
      status: "Closed",
      location: "City B",
      assignedTo: "Social Worker 2",
      // Add more attributes as needed
    },
    {
      caseId: 102,
      description: "Workplace Discrimination",
      date: "2024-05-15",
      status: "Closed",
      location: "City B",
      assignedTo: "Social Worker 2",
      // Add more attributes as needed
    },
    // Add more case data as needed
  ];

  const pendingCases = caseData.filter(
    (caseItem) => caseItem.status === "Open"
  );
  const solvedCases = caseData.filter(
    (caseItem) => caseItem.status === "Closed"
  );

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col lg:flex-row bg-gray-100">
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
              <h2 className="text-lg font-semibold pl-3">Pending Cases</h2>
              {pendingCases.map((caseItem) => (
                <div
                  key={caseItem.caseId}
                  className="border-b border-gray-200 p-3 flex items-center justify-between"
                >
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="flex flex-col">
                      <p className="text-gray-600">
                        <span className="font-semibold">Case ID:</span>{" "}
                        {caseItem.caseId}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">Description:</span>{" "}
                        {caseItem.description}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">Date:</span>{" "}
                        {caseItem.date}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-gray-600">
                        <span className="font-semibold">Status:</span>{" "}
                        {caseItem.status}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">Location:</span>{" "}
                        {caseItem.location}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">Assigned To:</span>{" "}
                        {caseItem.assignedTo}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Solved Cases */}
            <div>
              <h2 className="text-lg font-semibold pl-3">Solved Cases</h2>
              {solvedCases.map((caseItem) => (
                <div
                  key={caseItem.caseId}
                  className="border-b border-gray-200 p-3 flex items-center justify-between"
                >
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="flex flex-col">
                      <p className="text-gray-600">
                        <span className="font-semibold">Case ID:</span>{" "}
                        {caseItem.caseId}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">Description:</span>{" "}
                        {caseItem.description}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">Date:</span>{" "}
                        {caseItem.date}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-gray-600">
                        <span className="font-semibold">Status:</span>{" "}
                        {caseItem.status}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">Location:</span>{" "}
                        {caseItem.location}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">Assigned To:</span>{" "}
                        {caseItem.assignedTo}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
