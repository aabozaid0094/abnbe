import Container from "react-bootstrap/Container";
import ABNBHero from "../images/photo-grid.png";

function Hero() {
    return (
        <section className="my-4">
            <Container className="airbnb-hero">
                <div className="d-flex justify-content-center my-3">
                    <img
                        src={ABNBHero}
                        alt="airbnb-hero"
                    />
                </div>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by <br/>one-of-a-kind hosts-all without leaving home.</p>
            </Container>
        </section>
    );
}

export default Hero;
