/** @format */

import "./App.css";
import FileUploadForm from "./components/business_logic/FileUploadForm";
import FileList from "./components/business_logic/FileList.jsx";

function App() {
  return (
    <div className='container mt-5'>
      <h1 className='mb-4'>Upload Form</h1>
      <FileUploadForm />
      <FileList />
    </div>
  );
}

export default App;
