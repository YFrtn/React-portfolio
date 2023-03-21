import '../Footer/Footer.css'
import VK from '../../Images/icons/vk.svg';
import Twitter from '../../Images/icons/twitter.svg';
import linkedIn from '../../Images/icons/linkedIn.svg';
import instagram from '../../Images/icons/instagram.svg';
import gitHub from '../../Images/icons/gitHub.svg';


const Footer = () => {
    return ( 
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <ul className="social">
                            <li className="social__item">
                                <a href="#!"><img src={VK} alt="link"/></a>
                            </li>
                            <li className="social__item">
                                <a href="#!"><img src={Twitter} alt="link"/></a>
                            </li>
                            <li className="social__item">
                                <a href="#!"><img src={linkedIn} alt="link"/></a>
                            </li>
                            <li className="social__item">
                                <a href="#!"><img src={instagram} alt="link"/></a>
                            </li>
                            <li className="social__item">
                                <a href="#!"><img src={gitHub} alt="link"/></a>
                            </li>
                        </ul>
                        <div className="copyright">
                            <p>2023 Yport.kz</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
     );
}
 
export default Footer;