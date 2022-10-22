import Container from "react-bootstrap/Container";
import Card from "./Card";
import ExperiencesData from "../data/ExperiencesData";

function Experiences() {
    const ExperiencesElements = ExperiencesData.map((ExperienceData) => {
        return (
            <Card
                key={`experience_${ExperienceData.id}`}
                {...ExperienceData}
            />
        );
    });
    return (
        <section className="my-4">
            <Container className="experiences">
                <div className="d-flex overflow-auto my-3">
                    {ExperiencesElements}
                </div>
            </Container>
        </section>
    );
}

export default Experiences;