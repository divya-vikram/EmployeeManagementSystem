import 'react';
import PropTypes from 'prop-types';

const TasklistNum = ({ tasks }) => {
    return (
        <div>
            {tasks.map((elem, idx) => (
                <div key={idx}>{elem}</div>
            ))}
        </div>
    );
};

TasklistNum.propTypes = {
    tasks: PropTypes.array.isRequired
};

export default TasklistNum;