import { useEffect, useState } from 'react';
import axios from 'axios';

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/reviews');
                setReviews(response.data);
            }
            catch (error) {
                console.error('Ошибка при загрузке отзывов:', error);
            }
            finally {
                setIsLoading(false);
            }
        };

        fetchReviews();
    }, []);

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return {
        reviews,
        currentIndex,
        isLoading,
        goToPrev,
        goToNext,
        goToSlide,
    };
};

export default useReviews;
