import React from "react";

const Footer = ({ openModal, switchToServices, switchToHome }) => {
    return (
        <footer>
            <div className="footer-links">
                <div className="openHome" onClick={switchToHome}>О нас</div>
                <div className="openServices" onClick={switchToServices}>Наши услуги</div>
                <div className="openReviews" onClick={() => openModal("reviews")}>Отзывы</div>
            </div>
            <div className="footer-social">
                <a href="https://www.instagram.com/incomecost?igsh=MWN1bm9tcXVjODNuNw==" target="_blank" rel="noreferrer">
                    <img src="/img/instagram.jpg" alt="Instagram" />
                </a>
                <a href="https://2gis.kz/petropavlovsk/firm/70000001038726088?m=69.133131%2C54.865382%2F16" target="_blank" rel="noreferrer">
                    <img src="/img/2gis.png" alt="2GIS" />
                </a>
            </div>
            <div className="contact">
                <p>Контакты</p>
                <p>РК, г. Петропавловск, БЦ "Квартал", ул. К. Сутюшева 60, каб. №806</p>
                <p>8-888-888-88-88</p>
                <p>incomecost@mail.ru</p>
            </div>
            <div className="footer-form">
                <div className="openRequest" onClick={() =>openModal("request")}>Оставить заявку</div>
                <div className="openPromo" onClick={() => openModal("promo")}>Акции</div>
            </div>
        </footer>
    );
};

export default Footer;
