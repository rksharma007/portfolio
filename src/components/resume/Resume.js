import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../assets/RESUME.pdf";
import StarBg from '../layout/StarBg';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function removeTextLayerOffset() {
    const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
      textLayers.forEach(layer => {
        const { style } = layer;
        style.top = "0";
        style.left = "0";
        style.transform = "";
    });
  }
  
const resumeLink =
  "https://raw.githubusercontent.com/rksharma007/portfolio/main/src/assets/RESUME.pdf";

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <StarBg />
        <Row style={{ justifyContent: "center", position: "relative" }}  className="resume-section-download">
          <a href={pdf} target="_blank" rel="noreferrer" style={{maxWidth:"250px"}}>
            <i style={{color: "white"}} className="fa fa-download" >&nbsp;Download CV</i>
          </a>
        </Row>
        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.5} onLoadSuccess={removeTextLayerOffset} />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;