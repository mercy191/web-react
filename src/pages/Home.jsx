import React, { useState } from 'react';
import Header from "../components/Header";
import MainHome from "../components/MainHome";
import MainServices from "../components/MainServices";
import Burger from "../components/Burger";
import Footer from "../components/Footer";

const Home = ({ isMenuOpen, setMenuOpen, openModal, closeModal, modals }) => {
        const [currentView, setCurrentView] = useState("home"); // 'home' или 'services'

        const switchToHome = () => setCurrentView("home");
        const switchToServices = () => setCurrentView("services");

        return (
            <>
                <Header
                    setMenuOpen={setMenuOpen}
                    switchToHome={switchToHome}
                />

                <Burger
                    isMenuOpen={isMenuOpen}
                    setMenuOpen={setMenuOpen}
                    openModal={openModal}
                    switchToServices={switchToServices}
                />

                {currentView === "home" && (
                    <MainHome
                        openModal={openModal}
                        switchToServices={switchToServices}
                    />
                )}

                {currentView === "services" && (
                    <MainServices
                        openModal={openModal}
                        closeModal={closeModal}
                        modals={modals}
                        switchToHome={switchToHome}
                    />
                )}

                <Footer
                    openModal={openModal}
                    closeModal={closeModal}
                    switchToServices={switchToServices}
                    switchToHome={switchToHome}
                />
            </>
        );
};

export default Home;
