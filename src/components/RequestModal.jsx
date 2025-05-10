import React from 'react';
import {Link} from "react-router-dom";

const RequestModal = ({ closeModal }) => {
    return (
        <div className="overlay active" onClick={e => e.target === e.currentTarget && closeModal()}>
            <div className="form-container">
                <div className="close-btn" onClick={() => closeModal()}>✕</div>

                <h2>Заполните заявку</h2>
                <p>Будем рады работать с Вами!</p>

                <form>
                    <div>
                        <label>Имя</label>
                        <input type="text" placeholder="Введите имя" required/>
                    </div>
                    <div>
                        <label>Телефон</label>
                        <input type="tel" placeholder="Введите телефон" required/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" placeholder="Введите адрес электронной почты"/>
                    </div>
                    <div>
                        <label>Услуга</label>
                        <select required>
                            <option value="">Выберите интересующую услугу</option>
                            <option value="buh">
                                Комплексный бухгалтерский и налоговый учёт
                            </option>
                            <option value="otchet">
                                Налоговая и статистическая отчётность
                            </option>
                            <option value="esf">ЭСФ, СНТ, Импорт</option>
                            <option value="consult">Консультации</option>
                        </select>
                    </div>
                    <div>
                        <label>Акция</label>
                        <select>
                            <option value="">Выберите акцию</option>
                            <option value="discount">Скидка за друга</option>
                            <option value="first-month">....</option>
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