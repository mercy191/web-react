import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import QuestionModal from "./components/QuestionModal";
import PromoModal from "./components/PromoModal";
import RequestModal from "./components/RequestModal";
import ReviewsModal from "./components/ReviewsModal";
import useModals from "./hooks/useModals"; // новый хук
import "./index.css";

function App() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { modals, openModal, closeModal } = useModals();

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            setMenuOpen={setMenuOpen}
                            isMenuOpen={isMenuOpen}
                            openModal={openModal}
                            closeModal={closeModal}
                        />
                    }
                />
                <Route
                    path="/services"
                    element={
                        <ServicesPage
                            setMenuOpen={setMenuOpen}
                            isMenuOpen={isMenuOpen}
                            openModal={openModal}
                            closeModal={closeModal}
                            modals={modals}
                        />
                    }
                />
            </Routes>

            {modals.question && <QuestionModal closeModal={() => closeModal("question")} />}
            {modals.promo && <PromoModal closeModal={() => closeModal("promo")} />}
            {modals.request && <RequestModal closeModal={() => closeModal("request")} />}
            {modals.reviews && <ReviewsModal closeModal={() => closeModal("reviews")} />}
        </Router>
    );
}

export default App;
