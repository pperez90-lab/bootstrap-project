import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { useState } from "react";

import NavBar from "./components/NavBar";
import RegistrationForm from "./components/RegistrationForm";
import UserTable from "./components/UserTable";
import ImageGallery from "./components/ImageGallery";
import ButtonSection from "./components/ButtonSection";
import Footer from "./components/Footer";

export default function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    terms: false,
  });

  const [validated, setValidated] = useState(false);

  const [submissions, setSubmissions] = useState([
    {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      status: "Approved",
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      status: "Approved",
    },
  ]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      const newSubmission = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        status: "Approved",
      };

      setSubmissions([...submissions, newSubmission]);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        terms: false,
      });

      alert("Form submitted successfully!");
    }

    setValidated(true);
  };

  return (
    <div style={{ paddingTop: "80px" }}>
      <NavBar />
      <RegistrationForm
        onSubmit={handleSubmit}
        formData={formData}
        onChange={handleChange}
        validated={validated}
      />
      <UserTable submissions={submissions} />
      <ImageGallery />
      <ButtonSection />
      <Footer />
    </div>
  );
}
