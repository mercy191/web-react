import { useState } from "react";

const useModals = () => {
    const [modals, setModals] = useState({
        service: false,
        question: false,
        promo: false,
        request: false,
        reviews: false
    });

    const openModal = (name) => setModals(prev => ({ ...prev, [name]: true }));
    const closeModal = (name) => setModals(prev => ({ ...prev, [name]: false }));

    return {
        modals,
        openModal,
        closeModal,
        setModalState: setModals
    };
};

export default useModals;
