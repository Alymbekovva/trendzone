import React, { useState } from 'react';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        имя: '',
        фамилия: '',
        возраст: '',
        номер: '',
        группа: '',
        мероприятие: '',
        адрес: '',
        телефон: '',
        время: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Отправленные данные:', formData);
        alert('Регистрация успешно отправлена!');
    };

    return (
        <div className="container">
            <h1>Форма регистрации</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Имя</label>
                    <input
                        type="text"
                        name="имя"
                        value={formData.имя}
                        onChange={handleChange}
                        placeholder="Введите ваше имя"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Фамилия</label>
                    <input
                        type="text"
                        name="фамилия"
                        value={formData.фамилия}
                        onChange={handleChange}
                        placeholder="Введите вашу фамилию"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Возраст</label>
                    <input
                        type="number"
                        name="возраст"
                        value={formData.возраст}
                        onChange={handleChange}
                        placeholder="Введите ваш возраст"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Номер</label>
                    <input
                        type="text"
                        name="номер"
                        value={formData.номер}
                        onChange={handleChange}
                        placeholder="Введите ваш номер телефона"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Группа или название мероприятия</label>
                    <input
                        type="text"
                        name="группа"
                        value={formData.группа}
                        onChange={handleChange}
                        placeholder="Введите название группы или мероприятия"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Адрес</label>
                    <input
                        type="text"
                        name="адрес"
                        value={formData.адрес}
                        onChange={handleChange}
                        placeholder="Введите адрес"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Номер телефона</label>
                    <input
                        type="text"
                        name="телефон"
                        value={formData.телефон}
                        onChange={handleChange}
                        placeholder="Введите номер телефона"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Время проведения мероприятия</label>
                    <input
                        type="time"
                        name="время"
                        value={formData.время}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
};

export default RegisterForm;
