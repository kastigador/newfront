import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes, Roles } from './model';
import './App.css';
import AuthGuard from './guards/auth.guard';
import { RoutesWithNotFound } from './helpers';
import { Suspense, lazy } from 'react';
import Logout from './components/Logout/Logout';
import { RolGuard } from './guards';
import { Dashboard } from './Pages';

const Login = lazy(() => import('./Pages/Login/Login'));
const Private = lazy(() => import('./Pages/Private/Private'));

function App() {
    return (
        <div className="App" role="main">
            <Suspense fallback={<> Loading </>}>
                <BrowserRouter>
                    <Logout />
                    <RoutesWithNotFound>
                        <Route exact path={PublicRoutes.ROOT} element={<Navigate to={PrivateRoutes.PRIVATE} />} />
                        <Route exact path={PublicRoutes.LOGIN} element={<Login />} />
                        <Route element={<AuthGuard privateValidation={true} />}>
                            <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
                        </Route>
                        <Route element={<RolGuard rol={Roles.ADMIN} />}>
                        <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard
                         />} />

                        </Route>
                    </RoutesWithNotFound>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
