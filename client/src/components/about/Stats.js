import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Stats = () => {
return (
  <Row style={{marginTop:"20px", paddingBottom: "50px"}}>
    <Col style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <img align="center"  src="https://leetcode.card.workers.dev/rksharma007?theme=dark&font=baloo&extension=null" className="leetcodestat"/>
    </Col>
    <Col style={{ justifyContent: "center", paddingBottom: "10px" }} >
      {/* <img src="https://github-readme-stats.vercel.app/api?username=rksharma007&show_icons=true&theme=dark&hide_border=false&&count_private=true&include_all_commits=true" />  */}
      <img src="https://awesome-github-stats.azurewebsites.net/user-stats/rksharma007?cardType=github&theme=dark" className="githubstat" />
      
    </Col>
  </Row>
)};
    
export default Stats;