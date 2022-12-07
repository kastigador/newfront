import { createUser, resetUser } from '../../redux/states/user';
import { useFetch } from '../../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '../../model/routes';
import { useEffect } from 'react';

const baseUrl = 'https://rickandmortyapi.com/api/';
const characterUrl = baseUrl + 'character/';

export default function Login() {
    const { data, error } = useFetch(characterUrl + 2);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const login = () => {
        if (!error) {
            //aca probamos los roles haciendo ...data, rol
            dispatch(createUser(data));
            navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
        }
    };

    useEffect(() => {
        dispatch(resetUser());
        navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
    }, []);

    return (
        <div>
            <h1>Login</h1>
            <button onClick={login}>LOGIN</button>
        </div>
    );
}
