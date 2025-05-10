import React from 'react';
import usePromo from "../hooks/usePromo";

const PromoModal = ({ closeModal }) => {
    const promotions = usePromo();

    return (
        <div className="overlay active" onClick={(e) => e.target === e.currentTarget && closeModal()}>
            <div className="promo-container">
                <button className="close-btn" onClick={() => closeModal()}>✕</button>
                <h2>Акции</h2>
                <p>Здесь вы можете ознакомиться с нашими текущими акциями:</p>
                <div className="promo-list">
                    {promotions.map((promo) => (
                        <div key={promo.id} className="promo-item">
                            <strong>{promo.id}</strong>: {promo.description}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PromoModal;
