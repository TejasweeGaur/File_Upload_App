/** @format */

import { useState } from "react";
import Loader from "./Loader";

const FileList = () => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchRecords = async () => {
    const preview = document.querySelector(".files");
    preview.innerHTML = "";
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3000/files");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.statusCode === 400) {
        preview.innerHTML = `<p>${data.message}</p>`;
        preview.style.overflow = "hidden";
      } else {
        data.files.forEach((record) => {
          if (record.type === "application/pdf") {
            // Display PDF files using an iframe
            const iframe = document.createElement("iframe");
            iframe.src = record.url;
            iframe.classList.add("pdf-preview");
            preview.appendChild(iframe);
          } else {
            // Display other file types (e.g., images) as background images
            const divImage = document.createElement("div");
            divImage.classList.add("file");
            divImage.style.backgroundImage = `url('${record.url}')`;
            preview.appendChild(divImage);
          }
        });
      }
    } catch (error) {
      console.error("Error fetching files:", error);
      preview.innerHTML = `<p>Failed to fetch files</p>`;
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <div>
      <button
        type='submit'
        className='btn btn-secondary mt-2'
        onClick={fetchRecords}
      >
        Get Files
      </button>
      {isLoading && <Loader />}
      <div className={`files ${isLoading ? "hidden" : ""}`}></div>
    </div>
  );
};

export default FileList;
