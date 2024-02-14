import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
const Meal = ({ meal }) => {
    return (
        <article className={"specialsMeal"}>
            <img className={"specialsMealImg"} src={meal.image} alt={meal.name} />
            <div className={"specialsMealHeader"}>
                <h3>{meal.name}</h3>
                <span>{meal.price}</span>
            </div>
            <div className={"specialsMealBody"}>
                <p>{meal.description}</p>
                <Link to={"/order"}>
                    Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
                </Link>
            </div>
        </article>
    );
};

export default Meal;