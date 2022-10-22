import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import ABNBLogo from "../images/airbnb-logo.png";

function BSHeader() {
    return (
        <Navbar className="shadow-sm" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        className="airbnb-logo"
                        src={ABNBLogo}
                        alt="airbnb-logo"
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default BSHeader;