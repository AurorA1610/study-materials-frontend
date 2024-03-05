const PdfViewer = ({ currentPdfUrl }) => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div style={{ marginTop: "20px" }}>
            <iframe
              src={currentPdfUrl}
              title={currentPdfUrl}
              width="100%"
              height="550px"
            ></iframe>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default PdfViewer;
