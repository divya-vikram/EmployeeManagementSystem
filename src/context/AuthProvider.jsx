import { useEffect, useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { getLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  return (
    <div>
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
    </div>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider