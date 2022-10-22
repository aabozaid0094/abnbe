import { FaStar } from "react-icons/fa";

function Card(props) {
    // const cardData = props.cardData;
    return (
        <div className="card-item m-3" id={`experience_${props.id}`}>
            <div className="image-wrapper position-relative">
                <img
                    className="rounded-3"
                    src={require(`../images/experiences/${props.imageFileName}`)}
                    alt="experience"
                    />
                    {props.popover && <span className="image-popover position-absolute rounded-2">{props.popover}</span>}
            </div>
            <div className="card-meta d-flex align-items-center">
                {
                    props.stats.rating
                    &&
                    <div className="rating d-flex align-items-center">
                        <div className="me-1 text-danger"><FaStar className="d-block"/></div>
                        <div className="me-1">{props.stats.rating}</div>
                        <div className="me-1 text-muted">({props.stats.ratingCount})</div>
                    </div>
                }
                {
                    props.stats.rating
                    &&
                    props.country
                    &&
                    <div className="me-1 text-muted">.</div>
                }
                {
                    props.country
                    &&
                    <div className="me-1 text-muted">{props.country}</div>
                }
            </div>
            {props.infoText && <p className="info-text my-1">{props.infoText}</p>}
            {props.startingPrice && <div className="price"><strong>From {props.startingPrice}</strong> / person</div>}
        </div>

    );
}

export default Card;
