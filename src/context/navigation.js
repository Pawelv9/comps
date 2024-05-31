import React, {createContext, useState} from 'react';

const NavigationContext = createContext();

function NavigationProvider({children}) {
    const [currentPath, setCurringPath] = useState(window.location.pathname);

    return <NavigationContext.Provider value={{}}>
        {currentPath}
        {children}
    </NavigationContext.Provider>
}

export { NavigationProvider };
export default NavigationContext;