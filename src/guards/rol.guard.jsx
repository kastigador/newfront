import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { PrivateRoutes } from '../model/routes';

export default function RolGuard({ rol }) {
    const userState = useSelector((store) => {
        return store.user;
    });

    return userState.rol === rol ? <Outlet /> : <Navigate replace to={PrivateRoutes.PRIVATE} />;
}
