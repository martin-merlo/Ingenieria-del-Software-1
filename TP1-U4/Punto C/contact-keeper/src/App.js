import ContactForm from './components/ContactForm';
import styles from './styles/App.module.css';
import ContactTable from './components/ContactTable'
import React, { useState, useEffect } from 'react';
import './styles/ContactForm.module.css';
import './styles/ContactTable.module.css';

function App() {

  const [contacts, setContacts] = React.useState(()=>{
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      return JSON.parse(savedContacts);
    }
    return [];
  });

  const [editContact, setEditContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if(contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const addContact = (contact) => {
    if (editContact) {
      setContacts(
        contacts.map((c) => (c.email === editContact.email ? contact : c))
      )
      setEditContact(null);
    } else {
      setContacts([...contacts, contact]);
    }
  };

  const deleteContact = (email) => {
    setContacts(contacts.filter(contact => contact.email !== email));
  };

  const editContactHandler = (contact) => {
    setEditContact(contact);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phone.includes(searchTerm)
  );

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.heading}>Contact Keeper</h1>
      <input
        type="text"
        placeholder="Search contacts"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
        />
        <ContactForm addContact={addContact} editContact={editContact} />
        <ContactTable contacts={filteredContacts} deleteContact={deleteContact} editContact={editContactHandler}/>
    </div>
  );
}

export default App;
