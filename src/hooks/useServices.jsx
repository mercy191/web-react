import { useEffect, useState } from 'react';
import axios from 'axios';

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await axios.get('https://incomecost.ru/api/services');
                setServices(res.data);
            }
            catch (error) {
                console.error('Ошибка загрузки услуг:', error);
            }
        };

        fetchServices();
    }, []);

    return services;
};

export default useServices;
