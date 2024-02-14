import {
    faStar,
    faStarHalfStroke
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useEffect} from "react";
const ratingLevels = { '0.5': faStarHalfStroke, '1': faStar, };

const Review = ({ customer }) => {
    useEffect(()=>{
        customer.rating.map((ratingPoint, index) =>{
          console.log(ratingPoint=="0.5" ? faStarHalfStroke:faStar)
        })
    },[customer])
    return (
        <article className={"reviewsCard"}>
            <img src={customer.image} alt={customer.fullName} />
            <h4>{customer.fullName}</h4>
            <span>
                {customer.rating.map((ratingPoint, index) =>
                    <FontAwesomeIcon
                        key={index}
                        icon={ratingPoint=="0.5" ? faStarHalfStroke:faStar}
                        size="xs"
                    />
                )}
            </span>
            <blockquote><p>"{customer.says}"</p></blockquote>
        </article>
    );
};
export default Review;