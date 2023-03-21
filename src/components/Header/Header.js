import '../Header/Header.css'
const Header = () => {
    return ( 
        <>
            <header className="header">
                <div className="header__wrapper">
                    <h1 className="header__tittle">
                        <strong>Greetings, my name is <em>Yeraly</em> </strong><br/>
                        a frontend developer
                    </h1>
                    <div className="header__text">
                        <p>with passion for learning and creating</p>
                    </div>
                    <a href="./Download/Надыров Резюме.docx (1).pdf" className="btn">Dowload CV</a>
                </div>  
            </header>
        </>
     );
}
 
export default Header;