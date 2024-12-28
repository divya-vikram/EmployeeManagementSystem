import 'react';
import PropTypes from 'prop-types';
import { Header } from '../others/Header'
import { TaskNumber } from '../others/TaskNumber'
import { TasklistNum } from '../Tasklist/TasklistNum'


export const EmployeeDashboard = ({data}) => {
  return (
    <div className='p-10 bg- [#1C1C1C] h-screen'>
        <Header data={data}/>
        <TaskNumber data={data}/>
        <TasklistNum data={data}/>
    </div>
  )
}

EmployeeDashboard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default EmployeeDashboard
