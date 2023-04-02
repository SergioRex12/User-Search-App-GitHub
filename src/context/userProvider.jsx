import { useState, createContext, useEffect } from "react";

const userContext = createContext();

const UserProvider = ({children}) => {

    const [user, setUser] = useState({});
    const [modoOscuro, setModoOscuro] = useState(false);
    const [errorFind, setErrorFind] = useState(false);

    useEffect(() => {
        modeVision();
    },[])

    const modeVision = () => {
        let mode = localStorage.getItem('mode');
        clearMode();


        if (!mode) return;
        
        mode = JSON.parse(mode);

        document.documentElement.classList.add(mode ? `dark` : 'light');
        document.querySelector('body').classList.add(mode && `modoOscuro`);
        setModoOscuro(mode);
    }

    //bg-white dark:bg-blue-100

    const changeMode = (mode) => {
        clearMode();
        localStorage.setItem('mode', JSON.stringify(mode));
        setModoOscuro(mode);

        document.documentElement.classList.add(mode ? `dark` : 'light');
        if (mode) document.querySelector('body').classList.add(`modoOscuro`);
        
    }

    const clearMode = () => {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.remove('light');
        document.querySelector('body').classList.remove('modoOscuro');
    }

    const searchUserApi = async (userName) => {
        try {
            setUser({});
            const url = `https://api.github.com/users/${userName}`;

            const response = await fetch(url);
            const jsonData = await response.json();

            if (jsonData?.message) {
                setErrorFind(true);

                setTimeout(() => {
                    setErrorFind(false);
                }, 2500);

                return;
            }

            const userFilter = {
                login: jsonData.login,
                name: jsonData.name,
                avatar: jsonData.avatar_url,
                html_url: jsonData.html_url,
                company: jsonData.company,
                blog: jsonData.blog,
                location: jsonData.location,
                bio: jsonData.bio,
                twitter_username: jsonData.twitter_username,
                public_repos: jsonData.public_repos,
                followers: jsonData.followers,
                following: jsonData.following,
                created_at: jsonData.created_at
            }

            setUser(userFilter);

        } catch (error) {
            console.log(error);
            console.log("error");
            setErrorFind(true);

            //setTimeout(() => {
            //    setErrorFind(false);
            //}, 1500);
        }
    }


    return (
        <userContext.Provider
            value={{
                user,
                searchUserApi,
                modoOscuro,
                changeMode,
                errorFind
            }}
        >
            {children}
        </userContext.Provider> 
    );
}


export {
    UserProvider
}

export default userContext;