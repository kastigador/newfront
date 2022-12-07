import { lazy } from 'react';
import { Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { RoutesWithNotFound } from '../../helpers';
import { PrivateRoutes } from '../../model/routes';

const Dashboard = lazy(() => import('./Dashboard/Dashboard'));
const Home = lazy(() => import('./Home/Home'));

export default function Private() {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
            <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
            <Route path={PrivateRoutes.HOME} element={<Home />} />
        </RoutesWithNotFound>
    );
}
