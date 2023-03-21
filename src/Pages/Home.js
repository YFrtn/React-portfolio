import Header from "../components/Header/Header";




const Home = () => {
    return ( 
        <>
            <Header />
            <main className="section">
                <div className="container">
                    <h1 className="tittle-1">Skills</h1>
                    <div className="content-list">
                        <h2 className="tittle-2">Frontend</h2>
                        <p>HTML, CSS, Bootstar, JavaScript, React</p>
                    </div>
                </div>
            </main>
        </>
     );
}
 
export default Home;