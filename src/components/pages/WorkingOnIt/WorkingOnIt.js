import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './WorkingOnIt.css';

const WorkingOnIt = () => {
    return (
        <div className="container workingPage">
            <FontAwesomeIcon icon={faPersonDigging} size="3x" />
            <h2>The page will be up soon</h2>
        </div>
    );
};

export default WorkingOnIt;