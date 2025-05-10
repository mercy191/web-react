import React, {useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import useServices from "../hooks/useServices";
import usePromo from "../hooks/usePromo";

const RequestModal = ({ closeModal }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        serviceId: '',
        promotionId: '',
    });
    const services = useServices();
    const promotions = usePromo();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/requests', formData);
            alert('Заявка успешно отправлена!');
            closeModal();
        }
        catch (err) {
            console.error('Ошибка при отправке заявки:', err);
            alert('Ошибка при отправке.');
        }
    };

    return (
        <div className="overlay active" onClick={e => e.target === e.currentTarget && closeModal()}>
            <div className="form-container">
                <div className="close-btn" onClick={() => closeModal()}>✕</div>

                <h2>Заполните заявку</h2>
                <p>Будем рады работать с Вами!</p>

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
                        <label>Акция</label>
                        <select name="promotionId" value={formData.promotionId} onChange={handleChange}>
                            <option value="">Выберите акцию</option>
                            {promotions.map((promo) => (
                                <option key={promo.id} value={promo.id}>
                                    {promo.title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="submit-section">
                        <button type="submit" className="submit-btn">Оставить заявку</button>
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

export default RequestModal;