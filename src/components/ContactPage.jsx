import React, {useState} from "react";
import styles from "./ContactPage.module.css";

function ContactPage() {
    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setMessage("Please fill in all fields.");
            return;
        }
        setMessage(`Submitted! Looking forward to speaking with you, ${formData.name}`);
        setFormData({name: "", email: "", subject: "", message: ""});
    };

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.formTitle}>Contact Form</div>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="name">Name:</label>
                <input
                    className={styles.input}
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="off"
                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">Email:</label>
                <input
                    className={styles.input}
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="off"
                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="subject">Subject:</label>
                <input
                    className={styles.input}
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    autoComplete="off"
                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="message">Message:</label>
                <textarea
                    className={styles.messageTextarea}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    autoComplete="off"
                />
            </div>
            <button className={styles.submitButton} type="submit">Submit</button>
            {message && <div className={styles.formMessage}>{message}</div>}
        </form>
    );
}

export default ContactPage;
