import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const UploadStudyMaterials = () => {
  const { user } = useContext(AuthContext);
  const [pdfName, setPdfName] = useState("");
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("author", user.displayName);
    formData.append("pdf_name", pdfName);
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/upload-files", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        // Show alert on successful submission
        alert("Congratulations! Your upload was successful.");
        // Clear the form fields
        setPdfName("");
        setFile(null);
        // Reset the file input
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        // Handle errors if needed
        console.error(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col justify-center items-center m-10 border-double border-4 p-10 w-6/12 rounded-xl"
        onSubmit={submitImage}
        encType="multipart/form-data"
      >
        <h4 className="text-5xl mb-10 text-center">
          Contribute to the community.
          <br />
          Upload Your PDF!
        </h4>
        <br />
        <br />
        <input
          type="text"
          className="w-25 p-2 border-2 rounded text-center"
          placeholder={user.displayName}
          disabled
        />
        <br /> <br />
        <input
          type="text"
          className="w-25 p-2 border-2 rounded text-center"
          placeholder="Name of the file"
          value={pdfName}
          required
          onChange={(e) => setPdfName(e.target.value)}
        />
        <br /> <br />
        <input
          type="file"
          className="w-25 p-2 border-2 rounded text-center"
          accept="application/pdf"
          required
          onChange={(e) => setFile(e.target.files[0])}
          ref={fileInputRef}
        />
        <br /> <br />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UploadStudyMaterials;
