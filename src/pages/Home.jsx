import React from 'react';
import Header from "../components/Header";
import MainHome from "../components/MainHome";
import Burger from "../components/Burger";
import Footer from "../components/Footer";

const Home = ({ isMenuOpen, setMenuOpen, openModal, closeModal}) => (
    <>
        <Header
            setMenuOpen={setMenuOpen}
        />
        <Burger
            isMenuOpen={isMenuOpen}
            setMenuOpen={setMenuOpen}
            openModal={openModal}
        />
        <MainHome
            openModal={openModal}
            closeModal={closeModal}
        />
        <Footer
            openModal={openModal}
            closeModal={closeModal}
        />
    </>
);


export default Home;