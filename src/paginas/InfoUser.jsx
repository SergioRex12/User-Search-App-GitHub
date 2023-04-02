
import { useEffect, useState } from "react";
import useUser from "../hooks/useUsuer";

const InfoUser = () => {

    const {user, modoOscuro, errorFind} = useUser();
    const [error, setError] = useState(false);

    useEffect(() => {
        setError(errorFind);
    }, [errorFind]) 


    //Si no hay usuario
    if (!user?.login) {
        return (
            errorFind ? 
                <section className={modoOscuro ? 'info-user-font info-user-fontDark' : `info-user-font info-user-fontLight`}>
                    <section className="info-user">
                        <h1 className="user-not-found text-gray-600 dark:text-gray-400">
                            Usuario no encontrado
                        </h1>
                    </section>
                </section>
                
            : <></>

        )
    }

    const formatData = (created) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(created);
        return date.toLocaleDateString("es-ES", options); // domingo, 7 de octubre de 2018
    }

    const {avatar, bio, blog, company, created_at, followers, following, html_url, location, login, name, public_repos, twitter_username} = user;

    const changeState = (type) => {

        let clases = type ? 'yes-info' : 'not-info';

        return clases;
    }

    const changeStateInd = (type) => {
        let res;
        if (type === "user-stats") {
            if (modoOscuro) {
                 res = 'user-statsDark';
            } else {
                res = 'user-statsWhite';
            }
        }

        return res;
    }


    return ( 

        <section className={modoOscuro ? 'info-user-font info-user-fontDark' : `info-user-font info-user-fontLight`}>
            <section className="info-user">
                <img src={avatar} alt="Profile image" />

                <section>
                    <div className="profile-name">
                        <h3 className={modoOscuro ? 'text-white': 'text-gray-900'}>{name}</h3>
                        
                        <h3 className={modoOscuro ? 'text-white': 'text-gray-900'}>{formatData(created_at)}</h3>
                    </div>
                    

                    <div>
                        <a className="user-url-profile" href={html_url} target = "_blank"> @{login} </a>
                    </div>


                    <h3 className={`info-bio ${bio ? 'yes-info' : 'not-info'}`}>{bio ? bio : "El usuario no tiene bio"}</h3>

                    <section className={`${changeStateInd('user-stats')} user-stats`}>
                        
                        <section>
                            <h3>
                                Repos
                            </h3>

                            <h4>{public_repos}</h4>
                        </section>

                        <section>
                            <h3>
                                Followers
                            </h3>

                            <h4>{followers}</h4>
                        </section>

                        <section>
                            <h3>
                                Following
                            </h3>

                            <h4>{following}</h4>
                        </section>
                    </section>


                    <section className="user-links">
                        <h3 className={changeState(location)}> <span><i className="fa fa-map-marker" aria-hidden="true"></i></span> {location ? location : "No disponible"}</h3>
                        <h3 className={changeState(twitter_username)}> <span><i className="fa fa-twitter" aria-hidden="true"></i></span> {twitter_username ? twitter_username : "No disponible"}</h3>
                        <h3 className={changeState(blog)}> <span><i className="fa fa-link" aria-hidden="true"></i></span> {blog ? blog : "No disponible"}</h3>
                        <h3 className={changeState(blog)}> <span><i className="fa fa-building" aria-hidden="true"></i></span> {company ? company : "No disponible"}</h3>
                    </section>

                </section>
            </section>
        </section>
     );
}
 
export default InfoUser;