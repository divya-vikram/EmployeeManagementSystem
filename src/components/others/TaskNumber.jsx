import 'react'
import PropTypes from 'prop-types';

export const TaskNumber = ({data}) => {
  return (
    <div className='flex justify-between gap-5 screen mt-40'>
        <div className='px-10 py-5 rounded-xl w-1/2 bg-red-400'>
            <h2 className='text-4xl font-medium'>{data.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-semibold'>New Task</h3>
        </div>
        <div className='px-10 py-5 rounded-xl w-1/2 bg-orange-400'>
            <h2 className='text-4xl font-medium'>{data.taskNumbers.active}</h2>
            <h3 className='text-xl font-semibold'>Active Task</h3>
        </div>
        <div className='px-10 py-5 rounded-xl w-1/2 bg-yellow-400'>
            <h2 className='text-4xl font-medium'>{data.taskNumbers.taskCompleted}</h2>
            <h3 className='text-xl font-semibold'>Task Completed</h3>
        </div>
    </div>
  );
}

TaskNumber.propTypes = {
  data: PropTypes.shape({
    taskNumbers: PropTypes.shape({
      newTask: PropTypes.number.isRequired,
      active: PropTypes.number.isRequired,
      taskCompleted: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TaskNumber