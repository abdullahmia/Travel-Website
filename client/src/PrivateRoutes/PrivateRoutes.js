import {Route, Redirect} from 'react-router-dom';
import useAuth from '../context/useAuth'

const PrivateRoute = ({children, ...rest}) => {
    const {user} = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ?
                children :
                <Redirect
                    to={{
                        pathname: '/',
                        state: { from: location }
                    }}
                />}
        >

        </Route>
    )
}

export default PrivateRoute
