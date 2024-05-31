import React, {createContext, useEffect, useState} from 'react';

const NavigationContext = createContext();

function NavigationProvider({children}) {
    const [currentPath, setCurringPath] = useState(window.location.pathname);

    useEffect(() => {
        const handler = () => {
            setCurringPath(window.location.pathname)
        }
        window.addEventListener('popstate', handler);

        return () => {
            window.removeEventListener('popstate', handler);
        }
    }, []);

    const navigate = (to) => {
        window.history.pushState({}, '', to)
        setCurringPath(to)
    }

    return <NavigationContext.Provider value={{ currentPath, navigate }}>{children}
    {children}
</NavigationContext.Provider>
}

export { NavigationProvider };
export default NavigationContext;