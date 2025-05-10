import React from 'react';

const PromoModal = ({ closeModal }) => {
    return (
        <div className="overlay active" onClick={(e) => e.target === e.currentTarget && closeModal()}>
            <div className="promo-container">
                <button className="close-btn" onClick={() => closeModal()}>✕</button>
                <h2>Акции</h2>
                <p>Здесь вы можете ознакомиться с нашими текущими акциями:</p>
                <div className="promo-list">
                    <div className="promo-item">Условия акции 1: Рекомендуй нас другу...</div>
                    <div className="promo-item">Условия акции 2: ........</div>
                </div>
            </div>
        </div>
    );
};

export default PromoModal;
