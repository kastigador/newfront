import { Componente1, Componente2 } from './components';
import { HomeProvider } from './context/home.context';

const Home = () => {

    return (
        <HomeProvider>
            <Componente1 />
            <Componente2 />
        </HomeProvider>
    );
};

export default Home;
