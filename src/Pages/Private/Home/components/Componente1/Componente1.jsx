import { useHomeContext } from "../../context/home.context";

const Componente1 = () => {
    const { setHomeContextValule } = useHomeContext();

    const handleClick = () => {
        setHomeContextValule('Conext Cargado');
    };

    return (
        <div>
            <button onClick={handleClick}> Send information to context</button>
        </div>
    );
};

export default Componente1;
