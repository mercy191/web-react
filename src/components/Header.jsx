import React from "react";

const Header = ({ setMenuOpen }) => {
    return (
        <header>
            <div className="header-left">
                <div className="logo">logo</div>
                <div className="title">
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
