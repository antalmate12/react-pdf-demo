import React from "react";
import "./App.css";
import PDF from "./pages/pdf";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

function App() {
  return (
    <div style={{ display: "grid" }}>
      <PDFViewer width={"100%"} style={{ height: "90vh" }}>
        <PDF />
      </PDFViewer>

      <PDFDownloadLink document={<PDF />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </div>
  );
}

export default App;
