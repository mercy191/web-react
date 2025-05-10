    import React, {useState} from 'react';
    import axios from 'axios';
    import {Link} from "react-router-dom";

    const QuestionModal = ({ closeModal }) => {
        const [formData, setFormData] = useState({
            name: '',
            phone: '',
            email: '',
            service: '',
            question: ''
        });

        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        const handleSubmit = async (e) => {
            e.preventDefault();

            try {
                await axios.post('http://localhost:5000/api/questions', formData);
                alert('Форма отправлена!');
                closeModal();
            }
            catch (error) {
                console.error('Ошибка при отправке формы:', error);
            }
        };

        return (
            <div className="overlay active" id="questionOverlay" onClick={e => e.target === e.currentTarget && closeModal()}>
                <div className="form-container">
                    <button className="close-btn" onClick={() => closeModal()}>✕</button>

                    <h2>Остались вопросы?</h2>
                    <p>
                        Будем рады Вам помочь!<br/>
                        Оставьте свой номер телефона, и мы обязательно<br/>
                        перезвоним вам в ближайшее время
                    </p>

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Имя</label>
                            <input type="text" placeholder="Введите имя" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Телефон</label>
                            <input type="tel" placeholder="Введите телефон" name="phone" value={formData.phone} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" placeholder="Введите адрес электронной почты" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Услуга</label>
                            <select name="service" value={formData.service} onChange={handleChange} required>
                                <option value="">Выберите категорию вопроса</option>
                                <option value="1">Услуга 1</option>
                                <option value="2">Услуга 2</option>
                            </select>
                        </div>
                        <div>
                            <label>Ваш вопрос</label>
                            <textarea placeholder="Введите Ваш вопрос" name="question" value={formData.question} onChange={handleChange} />
                        </div>
                        <div className="submit-section">
                            <button type="submit" className="submit-btn">Отправить</button>
                            <p className="agreement">
                                Отправляя форму, вы соглашаетесь<br/>
                                с <Link to="#">Политикой конфиденциальности</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        );
    };

    export default QuestionModal;