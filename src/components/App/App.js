import React, { useState, useEffect, useReducer } from "react";
import Header from "../Header";
import ContactList from "../ContactList";

const API =
  "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchContacts(API);
  }, []);

  async function fetchContacts(API) {
    try {
      const response = await fetch(API);
      if (!response.ok) throw new Error(response.statusText);
      const contacts = await response.json();
      contacts.sort((a, b) => (a.last_name > b.last_name ? 1 : -1));
      setContacts(contacts);
      setFilteredContacts(contacts);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setError(error);
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <>
      <Header contacts={contacts} setFilteredContacts={setFilteredContacts} />
      <ContactList contacts={filteredContacts} />
    </>
  );
};

export default App;
