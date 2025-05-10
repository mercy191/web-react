const express = require('express');
const cors = require('cors');
const { handleQuestionPost } = require('./queries');
const { handleRequestPost } = require('./queries');
const { handleReviewsGet } = require('./queries');
const { handlePromotionsGet } = require('./queries');
const { handleServicesGet } = require('./queries');
const { handleNewsGet } = require('./queries');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/questions', handleQuestionPost);
app.post('/api/requests', handleRequestPost);
app.get('/api/reviews', handleReviewsGet);
app.get('/api/promotions', handlePromotionsGet);
app.get('/api/services', handleServicesGet);
app.get('/api/news', handleNewsGet);

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
