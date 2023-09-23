/** @format */

import { useState } from "react";

const FileUploadForm = () => {
  const initialFormData = {
    username: "",
    email: "",
    file: null,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: name === "file" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.file) {
      console.log("No file selected");
      return;
    }
    // Creating the FormData here with all the necessary details
    const data = new FormData();
    data.append("username", formData.username);
    data.append("email", formData.email);
    data.append("file", formData.file);

    try {
      const response = await fetch("http://localhost:3000/upload", {
        method: "POST",
        body: data, // Convert formData to JSON
      });

      if (response.ok) {
        // Handle success
        console.log("Data sent successfully");
        setFormData(initialFormData); // Reset the form fields
      } else {
        // Handle error
        console.error("Error sending data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='username' className='form-label'>
          Username
        </label>
        <input
          type='text'
          className='form-control'
          id='username'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='email' className='form-label'>
          Email
        </label>
        <input
          type='email'
          className='form-control'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='file' className='form-label'>
          File
        </label>
        <input
          type='file'
          className='form-control'
          id='file'
          name='file'
          onChange={handleChange}
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default FileUploadForm;
