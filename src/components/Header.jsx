import React from "react";

const Header = ({ setMenuOpen, switchToHome }) => {
    return (
        <header>
            <div className="header-left">
                <div className="logo" onClick={switchToHome}>
                    <img src="/img/logo.jpg" alt="Офис компании"/>
                </div>
                <div className="title" onClick={switchToHome}>
                    <h1>INCOME & COST</h1>
                </div>
                <div className="slogan-block">
                    <div className="line"></div>
                    <p className="slogan-text">
                        Бухгалтерское<br />
                        сопровождение<br />
                        вашего<br />
                        бизнеса
                    </p>
                </div>
            </div>
            <div className="header-right">
                <div className="contacts">
                    <p>8-888-888-88-88</p>
                    <p>incomecost@mail.ru</p>
                </div>

                <div className="burger" onClick={() => setMenuOpen(true)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
