import UploadElement from "../Components/UploadElement/UploadElement"
// import PdfViewer from "../Components/pdfViewer/PDFViewer"
export default function Cv() {
  return (
    <div>
      <div className="flex items-center justify-between px-5 mb-3">
        <h1 className="text-xl font-bold">CV File</h1>
        <UploadElement type='pdf' text="Upload Your CV" />
      </div>

      <div className="h-1 mx-5 bg-tertiary"></div>
      {/* show your CV */}


    </div>
  )
}
