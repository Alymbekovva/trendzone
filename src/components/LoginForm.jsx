import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  // Обновление состояния при вводе данных
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Обработка отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;

    // Простая проверка данных
    if (username === "admin" && password === "password") {
      alert("Успешная авторизация!");
      setError("");
    } else {
      setError("Неправильное имя пользователя или пароль.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Авторизация</h2>
        {error && <div className="error">{error}</div>}

        <div className="form-group">
          <label>Имя пользователя</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Введите имя пользователя"
            required
          />
        </div>

        <div className="form-group">
          <label>Пароль</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Введите пароль"
            required
          />
        </div>

        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginForm;
