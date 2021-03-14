import React, { useReducer, useEffect } from "react";
import "./ContactList.scss";
import ContactItem from "../ContactItem";
import LazyLoad, { forceCheck } from "react-lazyload";

const selectedContactsReducer = (selectedContacts, action) => {
  const newSelectedContacts = [...selectedContacts];
  if (action.type === "select") {
    newSelectedContacts.push(action.contactID);
  } else if (action.type === "unselect") {
    newSelectedContacts.splice(
      newSelectedContacts.indexOf(action.contactID),
      1
    );
  }
  console.log(newSelectedContacts);
  return newSelectedContacts;
};

const ContactList = ({ contacts }) => {
  const [selectedContacts, dispatchToSelectedContacts] = useReducer(
    selectedContactsReducer,
    []
  );

  useEffect(() => {
    forceCheck();
  });

  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <LazyLoad height={"4rem"} key={contact.id}>
          <ContactItem
            contact={contact}
            selectedContacts={selectedContacts}
            dispatchToSelectedContacts={dispatchToSelectedContacts}
          />
        </LazyLoad>
      ))}
    </ul>
  );
};

export default ContactList;
