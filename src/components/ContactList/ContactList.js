import React, { useState } from "react";
import "./ContactList.scss";
import ListItem from "./ListItem";

const ContactList = ({ data, foundData }) => {
  return (
    <ol className="contact-list">
      {foundData.map((contact) => (
        <ListItem key={contact.id} contact={contact} data={data} />
      ))}
    </ol>
  );
};

export default ContactList;
