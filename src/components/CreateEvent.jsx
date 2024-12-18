import React, { useState } from "react";

function CreateEvent({ onEventSubmit }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    address: "",
    time: "",
    ageRestriction: false,
    isPaid: false,
    organization: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Загружаем существующие данные из localStorage
    const existingEvents = JSON.parse(localStorage.getItem("eventData")) || [];
    
    // Добавляем новый объект к массиву
    const updatedEvents = [...existingEvents, formData];
    
    // Сохраняем массив обратно в localStorage
    localStorage.setItem("eventData", JSON.stringify(updatedEvents));
    
    if (onEventSubmit) {
      onEventSubmit(formData); // Передача данных в родительский компонент
    }

    // Очистка формы
    setFormData({
      title: "",
      description: "",
      address: "",
      time: "",
      ageRestriction: false,
      isPaid: false,
      organization: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Название мероприятия:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Описание:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Адрес:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Время:</label>
        <input
          type="datetime-local"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Ограничение возраста:</label>
        <input
          type="checkbox"
          name="ageRestriction"
          checked={formData.ageRestriction}
          onChange={handleChange}
        />
        Да
      </div>
      <div>
        <label>Платно:</label>
        <input
          type="checkbox"
          name="isPaid"
          checked={formData.isPaid}
          onChange={handleChange}
        />
        Да
      </div>
      <div>
        <label>Организация:</label>
        <input
          type="text"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Сохранить</button>
    </form>
  );
}

export default CreateEvent;
