import React from "react";
import Row from "react-bootstrap/Row";
import GitHubCalendar from "react-github-calendar";


const Github = () => {
return (
    <Row style={{ marginTop:"20px", justifyContent: "center", paddingBottom: "10px"}} >
      <GitHubCalendar
        className="commitCalendar"
        username="rksharma007"
        blockSize={15}
        blockMargin={5}
        fontSize={11}
        color="#00fffb"
      />
    </Row>
)};
    
export default Github;