const Contacts = () => {
    return ( 
        <>
            <main className="section">
                <div className="container">
                    <h1 className="tittle-1">Contacts</h1>
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="tittle-2">Location</h2>
                            <p>Astana, Kazakhstan</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="tittle-2">Telegram, WhatsApp</h2>
                            <p><a href="tel:+77788781111">+7 (778) 878 11-11</a></p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="tittle-2">Email</h2>
                            <p><a href="mailto:yeraly1994@gmail.com">yeraly1994@gmail.com</a></p>
                        </li>
                    </ul>
                </div>
            </main> 
        </>
     );
}
 
export default Contacts;