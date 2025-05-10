import {useEffect, useState} from 'react';
import axios from "axios";

const useNews = () => {
    const [news, setNewsList] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/news');
                setNewsList(res.data);
            }
            catch (error) {
                console.error('Ошибка загрузки новостей:', error);
            }
        };

        fetchNews();
    }, []);

    return news;
};

export default useNews;