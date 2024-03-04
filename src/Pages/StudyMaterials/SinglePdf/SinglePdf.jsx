const SinglePdf = ({ pdf, handleViewPdf }) => {
  const { name, uploader, pdfUrl } = pdf;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl border-2 border-blue-500">
      <div className="card-body items-center text-center">
        <h2 className="card-title uppercase">{name}</h2>
        <p>
          Uploaded by: <span className="text-blue-500">{uploader}</span>
        </p>
        <div className="card-actions">
          <button
            className="btn btn-primary mt-5"
            onClick={() => {
              handleViewPdf(pdfUrl);
            }}
          >
            View PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePdf;
