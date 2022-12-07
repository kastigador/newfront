import { useHomeContext } from '../../context/home.context';

const Componente2 = () => {
    const { homeContextValule } = useHomeContext();

    return <div>{homeContextValule}</div>;
};

export default Componente2;
