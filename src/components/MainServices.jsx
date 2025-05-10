import React, {useState} from 'react';
import ServiceModal from "./ServiceModal";

const MainServices = ({ openModal, closeModal, modals }) => {
    const [serviceData, setServiceData] = useState(null);

    const handleOpenModal = (title, description) => {
        setServiceData({ title, description });
        openModal("service");
    };

    return (
        <main>
            <section className="services">
                <h2>Наши услуги. Как мы можем вам помочь?</h2>
                <div className="services-grid">
                    <div className="service-box" onClick={() => handleOpenModal("Бухгалтерский учет", "Полное ведение бухгалтерии для вашего бизнеса.")}>
                        Бухгалтерский учет
                    </div>
                    <div className="service-box" onClick={() => handleOpenModal("Налоговый консалтинг", "Помогаем оптимизировать налоги и избежать рисков.")}>
                        Налоговый консалтинг
                    </div>
                    <div className="service-box" onClick={() => handleOpenModal("Аудит", "Проведение внутреннего и внешнего аудита.")}>
                        Аудит
                    </div>
                    <div className="service-box" onClick={() => handleOpenModal("Обучение бухгалтеров", "Курсы и семинары по повышению квалификации.")}>
                        Обучение бухгалтеров
                    </div>
                </div>
            </section>

            {modals.service && (<ServiceModal closeModal={() => closeModal("service")} serviceData={serviceData}/>)}
        </main>
    );
};

export default MainServices;
