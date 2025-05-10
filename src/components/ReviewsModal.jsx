import React, { useState } from 'react';

const ReviewsModal = ({ closeModal }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const reviews = [
        "Отзыв 1: Очень довольны работой!",
        "Отзыв 2: Быстро и профессионально!",
        "Отзыв 3: Будем сотрудничать ещё!"
    ];

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="overlay active" onClick={e => e.target === e.currentTarget && closeModal()}>
            <div className="reviews-modal">
                <div className="close-btn" onClick={() =>closeModal()}>✕</div>
                <h2>Отзывы</h2>

                <div className="slider-container">
                    <div
                        className="slider-track"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {reviews.map((text, index) => (
                            <div key={index} className="slide">{text}</div>
                        ))}
                    </div>

                    <button className="prev" onClick={goToPrev}>←</button>
                    <button className="next" onClick={goToNext}>→</button>

                    <div className="dots">
                        {reviews.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsModal;
