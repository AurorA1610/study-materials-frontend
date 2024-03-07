import { useEffect, useState } from "react";
import SinglePdf from "../SinglePdf/SinglePdf";
import PdfViewer from "../PdfViewer/PdfViewer";

const AllPdfs = () => {
  const [allPdfs, setAllPdfs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/get-files")
      .then((res) => res.json())
      .then((data) => setAllPdfs(data));
  }, []);
  const [currentPdfUrl, setCurrentPdfUrl] = useState("");
  const handleViewPdf = (url) => {
    setCurrentPdfUrl(url);
    document.getElementById("my_modal_3").showModal();
  };
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 px-4 py-7">
        {allPdfs.map((pdf1) => (
          <SinglePdf
            pdf1={pdf1}
            key={pdf1._id}
            handleViewPdf={handleViewPdf}
          ></SinglePdf>
        ))}
      </div>
      {currentPdfUrl && <PdfViewer currentPdfUrl={currentPdfUrl}></PdfViewer>}
    </div>
  );
};

export default AllPdfs;
