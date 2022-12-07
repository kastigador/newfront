import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '../model/routes';

const PrivateValidationElement = <Outlet />;
const PublicValidationElement = <Navigate replace to={PrivateRoutes.PRIVATE} />;

export const AuthGuard = ({ privateValidation }) => {
    const userState = useSelector((store) => {
        return store.user;
    });
    return userState?.name ? (
        privateValidation ? (
            PrivateValidationElement
        ) : (
            PublicValidationElement
        )
    ) : (
        <Navigate replace to={PublicRoutes.LOGIN} />
    );
};

export default AuthGuard;
