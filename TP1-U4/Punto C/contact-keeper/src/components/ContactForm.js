import React, { useEffect, useState } from 'react';
import styles from '../styles/ContactForm.module.css';

function ContactForm({ addContact, editContact }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if (editContact) {
            setName(editContact.name);
            setEmail(editContact.email);
            setPhone(editContact.phone);
        }
        else {
            setName('');
            setEmail('');
            setPhone('');
        }
    }, [editContact]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && phone) {
            addContact({ name, email, phone });
            setName('');
            setEmail('');
            setPhone('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.inputField}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.inputField}
            />
            <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={styles.inputField}
            />
            <button 
                type="submit" 
                className={styles.submitButton}>
                {editContact ? 'Update Contact' : 'Add Contact'}
            </button>
        </form>
    );
}

export default ContactForm; 