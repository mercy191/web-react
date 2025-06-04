const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root123!',
    database: 'web'
});

db.connect(err => {
    if (err) {
        console.error('Ошибка подключения к БД:', err);
    }
    else {
        console.log('Подключено к MySQL');
    }
});

const handleQuestionPost = (req, res) => {
    const { name, phone, email, serviceId, question } = req.body;
    const sql = 'INSERT INTO questions (name, phone, email, serviceId, question) VALUES (?, ?, ?, ?, ?)';

    db.query(sql, [name, phone, email, serviceId, question], (err, result) => {
        if (err) {
            console.error('Ошибка при сохранении:', err);
            res.status(500).send('Ошибка сервера');
        }
        else {
            res.status(200).send('Успешно сохранено');
        }
    });
};

const handleRequestPost = (req, res) => {
    const { name, phone, email, serviceId, promotion } = req.body;

    const sql = 'INSERT INTO requests (name, phone, email, serviceId, promotionId) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [name, phone, email, serviceId, promotion], (err, result) => {
        if (err) {
            console.error('Ошибка при сохранении заявки:', err);
            return res.status(500).send('Ошибка сервера');
        }
        else {
            res.status(200).send('Заявка успешно сохранена');
        }
    });
};

const handleReviewsGet = (req, res) => {
    const sql = 'SELECT review_text FROM reviews';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Ошибка при извлечении отзывов:', err);
            res.status(500).send('Ошибка сервера');
        }
        else {
            res.status(200).json(results);
        }
    });
};

const handlePromotionsGet = (req, res) => {
    db.query('SELECT * FROM promotions', (err, results) => {
        if (err) {
            console.error('Ошибка при получении акций:', err);
            res.status(500).send('Ошибка сервера');
        }
        else {
            res.json(results);
        }
    });
};

const handleServicesGet = (req, res) => {
    const sql = 'SELECT * FROM services';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Ошибка получения услуг:', err);
            res.status(500).send('Ошибка сервера');
        }
        else {
            res.json(results);
        }
    });
};

const handleNewsGet = (req, res) => {
    db.query('SELECT * FROM news ORDER BY news_date DESC', (err, results) => {
        if (err) {
            console.error('Ошибка при получении новостей:', err);
            return res.status(500).send('Ошибка сервера');
        }
        res.json(results);
    });
};

module.exports = {
    handleQuestionPost,
    handleRequestPost,
    handleReviewsGet,
    handlePromotionsGet,
    handleServicesGet,
    handleNewsGet
};

