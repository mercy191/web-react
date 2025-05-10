import React from "react";
import {Link} from "react-router-dom";

const BurgerMenu = ({ isMenuOpen, setMenuOpen, openModal}) => {
    if (!isMenuOpen) return null;

    return (
        <div className="menu open" onClick={(e) => e.target === e.currentTarget && setMenuOpen(false)}>
            <div className="close-menu" onClick={() => setMenuOpen(false)}>✕</div>
            <div className="menu-links">
                <div className="openPromo" onClick={() => openModal("promo")}>Акции</div>
                <Link to="/services">Наши услуги</Link>
                <div className="openReviews" onClick={() => openModal("reviews")}>Отзывы</div>
                <div className="openRequest" onClick={() => openModal("request")}>Оставить заявку</div>
            </div>
            <div className="contact">
                <p>РК, г. Петропавловск, БЦ "Квартал", ул. К. Сутюшева 60, каб. №806</p>
                <p>8-888-888-88-88</p>
                <p>incomecost@mail.ru</p>
            </div>
        </div>
    );
};

export default BurgerMenu;
