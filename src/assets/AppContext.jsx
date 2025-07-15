import { createContext, useState } from "react";

export const AppContext = createContext();

const ContextProvider = ({children})=>{
    const [isLogin, setLogin] = useState(false);
    return(
        <AppContext.Provider value={{isLogin, setLogin}}>
            {children}
        </AppContext.Provider>
    )
}

export default ContextProvider;