import { useParams } from 'react-router-dom';
import React, { useState } from "react";
function EventDetails() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    photo: null,
    address: "",
    ageRestriction: false,
    isPaid: false,
    time: "",
    organization: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(formData);
  };

  const { id } = useParams();
  const event = { title: `Event ${id}`, description: `Detailed description of event ${id}` };

  return (
    <div>
      
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <button type='submit' onClick={handleSubmit} className="btn btn-success">Register</button>
    </div>
  );
}

export default EventDetails;
