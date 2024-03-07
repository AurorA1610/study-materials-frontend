const SinglePdf = ({ pdf1, handleViewPdf }) => {
  const { title, author, pdf } = pdf1;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl border-2 border-blue-500">
      <div className="card-body items-center text-center">
        <h2 className="card-title uppercase">{title}</h2>
        <p>
          Uploaded by: <span className="text-blue-500">{author}</span>
        </p>
        <div className="card-actions">
          <button
            className="btn btn-primary mt-5"
            onClick={() => {
              handleViewPdf(`http://localhost:5000/uploads/${pdf}`);
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
