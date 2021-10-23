import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function AllMovies() {
    return (
        <div>
            <Container fluid style={{padding:"5%", background:"pink"}}>
                <Row style={{textAlign:"center"}}>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                        <Card>
                            <Card.Img variant="top" src="./logo192.png" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                Bell Bottom Movie Name
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                        <Card>
                            <Card.Img variant="top" src="./logo192.png" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                Bell Bottom Movie Name
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col><Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                        <Card>
                            <Card.Img variant="top" src="./logo192.png" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                Bell Bottom Movie Name
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col><Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                        <Card>
                            <Card.Img variant="top" src="./logo192.png" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                Bell Bottom Movie Name
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col><Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                        <Card>
                            <Card.Img variant="top" src="./logo192.png" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                Bell Bottom Movie Name
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col><Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                        <Card>
                            <Card.Img variant="top" src="./logo192.png" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                Bell Bottom Movie Name
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col><Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                        <Card>
                            <Card.Img variant="top" src="./logo192.png" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                Bell Bottom Movie Name
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AllMovies;