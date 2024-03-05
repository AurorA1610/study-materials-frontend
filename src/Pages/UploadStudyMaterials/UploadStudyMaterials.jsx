import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const UploadStudyMaterials = () => {
  const { user } = useContext(AuthContext);
  const [pdfName, setPdfName] = useState("");
  const [file, setFile] = useState("");

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("pdf_name", pdfName);
    formData.append("file", file);
    console.log(pdfName, file);
    // const result = await axios.post("http://localhost:5000/allpdfs");
  };
  return (
    <div>
      <form
        className="flex flex-col justify-center items-center m-10 border-2 p-10"
        onSubmit={submitImage}
      >
        <h4 className="text-5xl">Upload Your PDF!</h4>
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
