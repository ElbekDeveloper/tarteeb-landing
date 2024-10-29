export default function Header () {
    return (
        <header className="header" data-header>
            <div className="container">
                <a href="#" className="logo">
                    <h1>Tarteeb</h1>
                </a>

                <nav className="navbar" data-navbar>
                    <div className="wrapper">
                        <a href="#" className="logo">
                            <h1>Tarteeb</h1>
                        </a>

                        <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
                            {/* <IonIcon name="close-outline" aria-hidden="true" /> */}
                        </button>
                    </div>

                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <a href="#home" className="navbar-link" data-nav-link>Home</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#about" className="navbar-link" data-nav-link>About</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#courses" className="navbar-link" data-nav-link>Courses</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#blog" className="navbar-link" data-nav-link>Blog</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#" className="navbar-link" data-nav-link>Contact</a>
                        </li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <a href="https://tarteeb.uz/" className="btn has-before">
                        <span className="span">Login</span>
                        {/* <IonIcon name="arrow-forward-outline" aria-hidden="true" /> */}
                    </a>

                    <button className="header-action-btn" aria-label="open menu" data-nav-toggler>
                        {/* <IonIcon name="menu-outline" aria-hidden="true" /> */}
                    </button>
                </div>

                <div className="overlay" data-nav-toggler data-overlay></div>
            </div>
        </header>
    )
}