import React from "react";
import {Link} from "react-router-dom";

const MainHome = ({ openModal }) => {
    return (
        <main>
            <section className="about">
                <div className="about-card">
                    <div className="about-left">
                        <img src="/img/office.jpg" alt="Офис компании"/>
                    </div>

                    <div className="about-right">
                        <h3>КТО МЫ ТАКИЕ</h3>
                        <p>
                            Наша компания специализируется на поставке и поддержке программных
                            продуктов фирмы «1С», реализации компьютерной техники и
                            программного обеспечения, торгового оборудования и расходных
                            материалов. <br/>
                            Мы также предоставляем услуги бухгалтерского обслуживания, аудита
                            и обучения как профессиональных, так и начинающих бухгалтеров.
                        </p>
                        <h3>ЧТО МЫ УМЕЕМ</h3>

                        <div className="about-buttons-row">
                            <Link to="/services" className="btn-link">наши услуги</Link>
                            <button className="ask-btn" onClick={() => openModal("promo")}>Акции</button>
                        </div>

                        <h3>ОСТАЛИСЬ ВОПРОСЫ?</h3>
                        <div className="ask-btn" onClick={() => openModal("question")}>задать вопрос</div>
                    </div>
                </div>
            </section>

            <section className="news">
                <div className="news-card">
                    <h2>НОВОСТИ В МИРЕ БУХ. УЧЁТА</h2>

                    <ul className="news-list">
                        <li>
                            <span className="news-date">15.04.2025</span>
                            <span className="news-time">11:00</span>
                            <a
                                href="https://inbuh.kz/ru/news/796-obnovlen-shablon-formy-910-00-v-sono-i-kabinete-nalogoplatelshchika"
                                target="_blank" rel="noreferrer"
                            >
                                Обновлен шаблон формы 910.00 в СОНО и Кабинете налогоплательщика
                            </a>
                        </li>

                        <li>
                            <span className="news-date">06.03.2025</span>
                            <span className="news-time">19:53</span>
                            <a
                                href="https://www.klerk.ru/buh/articles/640674/"
                                target="_blank" rel="noreferrer"
                            >
                                Все налоговые базы и ставки НДФЛ в 2025 году: таблица
                            </a>
                        </li>

                        <li>
                            <span className="news-date">20.02.2025</span>
                            <span className="news-time">11:51</span>
                            <a
                                href="https://www.zakon.kz/finansy/6467795-bukhgalterskiy-uchet-v-gosuchrezhdeniyakh-vneseny-popravki.html"
                                target="_blank" rel="noreferrer"
                            >
                                Бухгалтерский учет в госучреждениях: внесены поправки
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default MainHome;
