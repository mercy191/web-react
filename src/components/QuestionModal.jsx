    import React, {useState} from 'react';
    import axios from 'axios';
    import {Link} from "react-router-dom";
    import useServices from "../hooks/useServices";

    const QuestionModal = ({ closeModal }) => {
        const [formData, setFormData] = useState({
            name: '',
            phone: '',
            email: '',
            serviceId: '',
            question: ''
        });
        const services = useServices();

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
                            <input name="name" type="text" placeholder="Введите имя" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Телефон</label>
                            <input name="phone" type="tel" placeholder="Введите телефон" value={formData.phone} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Email</label>
                            <input name="email" type="email" placeholder="Введите адрес электронной почты" value={formData.email} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Услуга</label>
                            <select name="serviceId" value={formData.serviceId} onChange={handleChange} required>
                                <option value="">Выберите интересующую услугу</option>
                                {services.map(service => (
                                    <option key={service.id} value={service.id}>
                                        {service.name}
                                    </option>
                                ))}
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