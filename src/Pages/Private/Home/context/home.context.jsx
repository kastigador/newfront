import { useContext } from 'react';
import { createContext, useState } from 'react';

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
    const [homeContextValule, setHomeContextValule] = useState();

    return <HomeContext.Provider value={{ homeContextValule, setHomeContextValule }}>{children}</HomeContext.Provider>;
};

export const useHomeContext = () => {
    const context = useContext(HomeContext);
    if (context === undefined) throw new Error('HomeContext must be used within a HomeProvider');
    return context;
};
