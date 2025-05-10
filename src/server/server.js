const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Подключение к базе данных
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',         // ваш пользователь
    password: '',         // ваш пароль
    database: 'your_db'   // имя вашей базы
});

db.connect(err => {
    if (err) {
        console.error('Ошибка подключения к БД:', err);
    } else {
        console.log('Подключено к MySQL');
    }
});

// Прием запроса
app.post('/api/questions', (req, res) => {
    const { name, phone, email, service, question } = req.body;
    const sql = 'INSERT INTO questions (name, phone, email, service, question) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [name, phone, email, service, question], (err, result) => {
        if (err) {
            console.error('Ошибка при сохранении:', err);
            res.status(500).send('Ошибка сервера');
        } else {
            res.status(200).send('Успешно сохранено');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
