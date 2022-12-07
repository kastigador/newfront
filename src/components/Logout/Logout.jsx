import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../../model/routes';
import { resetUser, userKey } from '../../redux/states/user';

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logout = () => {
        navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
        dispatch(resetUser(userKey));
    };
    return <button onClick={logout}>Logout</button>;
};

export default Logout;
