import { Button, Container, Row, Col } from "react-bootstrap"

const HomePage = () => {
    return (
        <div className="HomePage mt-5">

            <Container>
                <h1>Bienvenido!</h1>
                <hr />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit mollitia autem provident repudiandae dolorum est vitae eius molestias totam fugit ipsam, modi excepturi porro optio laboriosam dignissimos cupiditate quia eum.</p>

                <hr />


                <Row>
                    <Col lg={{ span: 4 }}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nam in rerum fuga et assumenda animi repellat itaque, debitis eos neque quibusdam eum eius accusantium nobis dolorem, aut quae distinctio.</p>
                    </Col>
                    <Col lg={{ span: 8 }}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nam in rerum fuga et assumenda animi repellat itaque, debitis eos neque quibusdam eum eius accusantium nobis dolorem, aut quae distinctio.</p>
                    </Col>
                </Row>

                <hr />

                <Button variant="dark" size="lg">Ir a proyectos</Button>

            </Container>
        </div>
    )
}

export default HomePage