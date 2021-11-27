import {createContext} from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const authContext = useFirebase();
    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
