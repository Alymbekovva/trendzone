import React, { useEffect, useState } from "react";

function EventCard() {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    // Загружаем все события из localStorage
    const storedEvents = JSON.parse(localStorage.getItem("eventData")) || [];
    setEventList(storedEvents);
  }, []);

  if (eventList.length === 0) {
    return <p style={{ textAlign: "center", fontSize: "18px" }}>Нет сохраненных мероприятий.</p>;
  }

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Список мероприятий</h2>
      {eventList.map((event, index) => (
        <div key={index} className="event-card">
          <h3>{event.title}</h3>
          <p><strong>Описание:</strong> {event.description}</p>
          <p><strong>Адрес:</strong> {event.address}</p>
          <p><strong>Время:</strong> {new Date(event.time).toLocaleString()}</p>
          <p><strong>Ограничение возраста:</strong> {event.ageRestriction ? "Да" : "Нет"}</p>
          <p><strong>Платно:</strong> {event.isPaid ? "Да" : "Нет"}</p>
          <p><strong>Организация:</strong> {event.organization}</p>
        </div>
      ))}
    </div>
  );
}

export default EventCard;
