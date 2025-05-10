import React from "react";

const ServiceModal = ({ closeModal, serviceData }) => {
    if (!serviceData) return null;

    return (
        <div className="overlay active" onClick={e => e.target === e.currentTarget && closeModal()}>
            <div className="service-modal-container">
                <div className="close-btn" onClick={() => closeModal()}>✕</div>
                <h3>{serviceData.title}</h3>
                <p>{serviceData.description}</p>
            </div>
        </div>
    );
};

export default ServiceModal;
