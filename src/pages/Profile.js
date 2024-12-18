import React, { useState } from "react";
function Profile() {

  const [profile, setProfile] = useState({
    firstName: "Иван",
    lastName: "Иванов",
    email: "ivan.ivanov@example.com",
    registeredCount: 50, // Количество людей на мероприятиях
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };
    return (
      <div>
         <div className="profile-container">
      <h2>Профиль пользователя</h2>
      <div className="profile-form">
        <div className="form-group">
          <label>Имя</label>
          <input
            type="text"
            name="firstName"
            value={profile.firstName}
            onChange={handleChange}
            placeholder="Введите имя"
          />
        </div>

        <div className="form-group">
          <label>Фамилия</label>
          <input
            type="text"
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
            placeholder="Введите фамилию"
          />
        </div>

        <div className="form-group">
          <label>Электронная почта</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="Введите email"
          />
        </div>

        <div className="form-group">
          <label>Зарегистрированные участники</label>
          <input
            type="number"
            name="registeredCount"
            value={profile.registeredCount}
            onChange={handleChange}
            placeholder="Введите количество участников"
          />
        </div>
      </div>

      <div className="profile-output">
        <h3>Результат</h3>
        <p>
          <strong>Имя:</strong> {profile.firstName}
        </p>
        <p>
          <strong>Фамилия:</strong> {profile.lastName}
        </p>
        <p>
          <strong>Электронная почта:</strong> {profile.email}
        </p>
        <p>
          <strong>Количество зарегистрированных участников:</strong>{" "}
          {profile.registeredCount}
        </p>
      </div>
    </div>
        <h1>Профиль пользователя</h1>
        <p>ИМЯ: Бейшенбеков Төлөбек</p>
        <p>ЭЛЕКТРОННАЯ ПОЧТА: tolobek.print@gmail.com</p>
        <p>ЗАРЕГИСТРИРОВАНО СОБЫТИЙ:4 </p>
      </div>
    );
  }
  
  export default Profile;
  