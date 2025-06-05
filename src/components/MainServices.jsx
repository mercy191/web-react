import React, {useState} from 'react';
import ServiceModal from "./ServiceModal";
import useServices from "../hooks/useServices";
import useNews from "../hooks/useNews";

const MainServices = ({ openModal, closeModal, modals, switchToHome }) => {
    const [serviceData, setServiceData] = useState(null);
    const services = useServices();
    const news = useNews();

    const handleOpenModal = (title, description) => {
        setServiceData({ title, description });
        openModal("service");
    };

    return (
        <main>
            <section className="about">
                <div className="about-card">
                    <div className="about-left">
                        <img src="/img/office.jpg" alt="Офис компании"/>
                    </div>
                    <div className="about-right">
                        <h3>Наши услуги. Как мы можем вам помочь?</h3>
                        <div className="services">
                            <div className="services-grid">
                                {services.map(service => (
                                    <div
                                        key={service.id}
                                        className="service-box"
                                        onClick={() => handleOpenModal(service.name, service.description)}
                                    >
                                        {service.name}
                                    </div>
                                ))}
                            </div>
                        </div>
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

            {modals.service && (<ServiceModal closeModal={() => closeModal("service")} serviceData={serviceData}/>)}
        </main>
    );
};

export default MainServices;
