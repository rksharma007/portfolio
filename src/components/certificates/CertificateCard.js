import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


const CertificateCard = (props) => {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center"}}>
          Skills:<span style={{ color:"var(--my-tertiary-color)"}}> {props.skills}</span>
        </Card.Text>
      </Card.Body>

      <Card.Footer>
        {!props.isBlog && props.url && (
          <Button variant="outline-info" href={props.url} target="_blank" style={{marginLeft: "10px", marginBottom: "15px"}}>
            <i className="fa-regular fa-eye" /> &nbsp; {"Open"}
          </Button>
        )}
      </Card.Footer>
    </Card>
  );
}
export default CertificateCard;