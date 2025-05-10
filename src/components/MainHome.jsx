import React from "react";
import useNews from "../hooks/useNews";

const MainHome = ({ openModal, switchToServices }) => {
    const news = useNews();

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
                            <div className="ask-btn" onClick={switchToServices}>Наши услуги</div>
                            <div className="ask-btn" onClick={() => openModal("promo")}>Акции</div>
                        </div>

                        <h3>ОСТАЛИСЬ ВОПРОСЫ?</h3>
                        <div className="ask-btn" onClick={() => openModal("question")}>Задать вопрос</div>
                    </div>
                </div>
            </section>

            <section className="news">
                <div className="news-card">
                    <h2>НОВОСТИ В МИРЕ БУХ. УЧЁТА</h2>
                    <ul className="news-list">
                        {news.map((item) => (
                            <li key={item.id}>
                                <span className="news-date">{item.news_date?.split('T')[0]}</span>
                                <a href={item.url} target="_blank" rel="noreferrer">
                                    {item.description}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

        </main>
    );
};

export default MainHome;
