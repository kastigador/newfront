import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

export const RoutesWithNotFound = ({children}) => {
  return (
    <Routes>
        {children}
        <Route path={"*"} element={<div>Not Found</div>}/>
    </Routes>
  )
}

export default RoutesWithNotFound;