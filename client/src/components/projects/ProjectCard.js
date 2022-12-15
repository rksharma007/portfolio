import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


const ProjectCard = (props) => {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center"}}>
          Stack:<span style={{ color:"var(--my-tertiary-color)"}}> {props.stack}</span>
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>

      <Card.Footer>
      {!props.isBlog && props.ghLink && (
          <Button variant="outline-info" href={props.ghLink} target="_blank" style={{marginBottom: "15px"}}>
            <i className="fa-brands fa-github" /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
      )}
        {!props.isBlog && props.demoLink && (
          <Button variant="outline-info" href={props.demoLink} target="_blank" style={{marginLeft: "10px", marginBottom: "15px"}}>
            <i className="fa-light fa-browser" /> &nbsp; {"Demo"}
          </Button>
        )}
      </Card.Footer>
    </Card>
  );
}
export default ProjectCard;