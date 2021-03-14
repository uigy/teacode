import React, { useState } from "react";
import "./ContactItem.scss";
import Checkbox from "@material-ui/core/Checkbox";

const ContactItem = ({
  contact,
  selectedContacts,
  dispatchToSelectedContacts,
}) => {
  const [checked, setChecked] = useState(selectedContacts.includes(contact.id));

  const handleItemClick = (event, contactID) => {
    setChecked(!checked);
    dispatchToSelectedContacts({
      type: !checked ? "select" : "unselect",
      contactID,
    });
  };

  return (
    <li
      className="contact-item"
      onClick={(event, contactID) => handleItemClick(event, contact.id)}
    >
      <div className="contact-avatar">
        {contact.avatar ? (
          <img
            className="contact-photo"
            src={contact.avatar}
            alt={`${contact.first_name} ${contact.last_name}`}
          />
        ) : (
          <span className="contact-initials">
            {contact.first_name[0] + contact.last_name[0]}
          </span>
        )}
      </div>
      <div className="contact-info">
        <div className="contact-name">{`${contact.first_name} ${contact.last_name}`}</div>
        <div className="contact-email">{contact.email}</div>
      </div>
      <div className="contact-checkbox">
        <Checkbox checked={checked} color="default" />
      </div>
    </li>
  );
};

export default ContactItem;
