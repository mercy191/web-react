import React from 'react';
import useReviews from "../hooks/useReviews";

const ReviewsModal = ({ closeModal }) => {
    const {
        reviews,
        currentIndex,
        isLoading,
        goToPrev,
        goToNext,
        goToSlide
    } = useReviews();

    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    return (
        <div className="overlay active" onClick={e => e.target === e.currentTarget && closeModal()}>
            <div className="reviews-modal">
                <div className="close-btn" onClick={() => closeModal()}>✕</div>
                <h2>Отзывы</h2>

                <div className="slider-container">
                    <div
                        className="slider-track"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {reviews.map((review, index) => (
                            <div key={index} className="slide">
                                {review.review_text}
                            </div>
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
