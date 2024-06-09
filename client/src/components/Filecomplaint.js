import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const CaseForm = () => {
  const [formData, setFormData] = useState({
    Complaint_Description: "",
    Respondent_Name: "",
    Respondent_Contact_Number: "",
    Respondent_Email: "",
    Respondent_Address: "",
    Evidence_Description: "",
    Witness_Name: "",
    Witness_Contact_Number: "",
    Evidence: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, Evidence: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const email = localStorage.getItem("email");
      await axios.post(
        `http://localhost:3003/api/upload?email=${email}`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Form submitted successfully");
      setFormData({
        Complaint_Description: "",
        Respondent_Name: "",
        Respondent_Contact_Number: "",
        Respondent_Email: "",
        Respondent_Address: "",
        Evidence_Description: "",
        Witness_Name: "",
        Witness_Contact_Number: "",
        Evidence: null,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2 lg:pr-4">
          {/* Left content goes here */}
        </div>
        <div className="w-full lg:w-1/2 lg:pl-4">
          <form
            onSubmit={handleSubmit}
            className="px-4 py-8 bg-gray-100 shadow-md rounded-md"
          >
            <div className="mb-4">
              <label className="block mb-2">Complaint Description:</label>
              <input
                type="text"
                name="Complaint_Description"
                value={formData.Complaint_Description}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Respondent Name:</label>
              <input
                type="text"
                name="Respondent_Name"
                value={formData.Respondent_Name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Respondent Contact Number:</label>
              <input
                type="text"
                name="Respondent_Contact_Number"
                value={formData.Respondent_Contact_Number}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Respondent Email:</label>
              <input
                type="email"
                name="Respondent_Email"
                value={formData.Respondent_Email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Respondent Address:</label>
              <input
                type="text"
                name="Respondent_Address"
                value={formData.Respondent_Address}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Evidence Description:</label>
              <input
                type="text"
                name="Evidence_Description"
                value={formData.Evidence_Description}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Witness Name:</label>
              <input
                type="text"
                name="Witness_Name"
                value={formData.Witness_Name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Witness Contact Number:</label>
              <input
                type="text"
                name="Witness_Contact_Number"
                value={formData.Witness_Contact_Number}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Evidence:</label>
              <input
                type="file"
                name="Evidence"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CaseForm;
