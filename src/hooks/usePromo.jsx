import { useEffect, useState } from 'react';
import axios from 'axios';

const usePromo = () => {
    const [promotions, setPromotions] = useState([]);

    useEffect(() => {
        const fetchPromotions = async () => {
            try {
                const res = await axios.get('https://incomecost.ru/api/promotions');
                setPromotions(res.data);
            }
            catch (error) {
                console.error('Ошибка при загрузке акций:', error);
            }
        };

        fetchPromotions();
    }, []);

    return promotions;
};

export default usePromo;