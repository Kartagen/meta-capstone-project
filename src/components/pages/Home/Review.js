import {
    faStar,
    faStarHalfStroke
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ratingLevels = { '0.5': faStarHalfStroke, '1': faStar, };

const Review = ({ customer }) => {
    return (
        <article>
            <img src={customer.image} alt={customer.fullName} />
            <h4>{customer.fullName}</h4>
            <span>
                {customer.rating.map((ratingPoint, index) =>
                    <FontAwesomeIcon
                        key={index}
                        icon={ratingLevels[ratingPoint]}
                        size="xs"
                    />
                )}
            </span>
            <blockquote><p>"{customer.says}"</p></blockquote>
        </article>
    );
};
export default Review;