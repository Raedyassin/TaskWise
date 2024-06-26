import React, { useState } from "react";
import axios from "axios";
import UploadElement from "../Components/UploadElement/UploadElement";
import PdfViewer from "../Components/pdfViewer/PDFViewer";
import { MANAGE, baseURL } from "../API/API.js";

export default function Cv() {
  const [cvFile, setCvFile] = useState(null);

  const handleFileUpload = async (file) => {
    const token = localStorage.getItem("token"); // Replace with your actual token

    const formData = new FormData();
    formData.append("resume_file", file);

    try {
      const response = await axios.patch(`${baseURL}/${MANAGE}`, formData, {
        headers: {
          Authorization: "Token " + token,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("File uploaded successfully:", response.data);
      setCvFile(URL.createObjectURL(file)); // To preview the uploaded PDF
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between px-5 mb-3">
        <h1 className="text-xl font-bold">CV File</h1>
        <UploadElement
          type="pdf"
          text="Upload Your CV"
          onFileUpload={handleFileUpload}
        />
      </div>

      <div className="h-1 mx-5 bg-tertiary"></div>
      {/* show your CV */}
      <div>
        <h1 className="text-2xl font-bold text-center my-4">View your CV</h1>
        {cvFile && <PdfViewer fileUrl={cvFile} />}
      </div>
    </div>
  );
}
