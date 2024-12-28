import 'react';
import PropTypes from 'prop-types';

const Header = ({ data }) => (
    <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-4xl font-semibold'>{data.firstname}</span>
    </h1>
);

Header.propTypes = {
    data: PropTypes.shape({
        firstname: PropTypes.string.isRequired,
    }).isRequired,
};

export default Header