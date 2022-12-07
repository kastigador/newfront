import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../../../model/routes";

const Dashboard = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.HOME}`, { replace: true });
    };
    return (
        <>
            <button onClick={handleClick}>Go to Home</button>
        </>
    );
};

export default Dashboard;
