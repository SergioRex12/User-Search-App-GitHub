import useUser from "../hooks/useUsuer";

const Nav = () => {

    const {modoOscuro, changeMode} = useUser();

    const change = () => {
        changeMode(!modoOscuro);
    }

    return (  
        <div className="App">
            <main>
                <section className="top-info">
                    <h1 className="text-gray-600 dark:text-gray-400">Rex GitHub User</h1>
                    <a className="text-gray-600 dark:text-gray-400" onClick={change}><h2> {modoOscuro ? 'Light' : 'Dark'}</h2></a>
                </section>
            </main>
        </div>
    );
}
 
export default Nav;