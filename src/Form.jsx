import { useState } from "react";
import "./Form.css";
export default function Form() {
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [nameError, setNameError] = useState("");
    function handleChange(e) {
        const { name, value } = e.target;
        if (value.length <= 3) {
            setNameError("Name is too short");
            console.log(nameError);
        } else {
            setNameError("");
        }
        setFormData((prev) => ({ ...prev, [name]: value }));
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
    }

    return <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter name"
                value={formData.name} onChange={handleChange} required
                name="name" id="form-name" />
            
            {nameError && <small className="error">{nameError}</small> }
            <input type="email" placeholder="Enter email"
                value={formData.email} onChange={handleChange} required
                name="email" id="form-email" />
            <input type="submit" value="Submit" />
        </form>

    </>
}