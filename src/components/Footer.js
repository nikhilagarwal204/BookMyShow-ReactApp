import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Footer() {
  return (
    <div class="foot" style={{background:"black", color:"white"}}>
        <Container fluid>
            <Row style={{padding:"3%"}}>
                <Col xs={{offset:1, span: 2}}>
                    Col 1 
                </Col>
                <Col xs={4}>
                    Col 2
                </Col>
                <Col xs={5} style={{display:"flex", flexDirection:"row-reverse"}}>
                    <Button style={{background:"rgb(236, 94, 113)"}}>Contact Today!</Button>
                </Col>
            </Row>
            <Row style={{textAlign:"center", padding:"3%", background:"grey"}}>
                <Col>
                    Col 1 
                </Col>
                <Col>
                    Col 2
                </Col>
                <Col>
                    Col 3
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Footer;
