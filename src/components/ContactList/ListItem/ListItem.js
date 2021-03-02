import React, { useState } from "react";
import "./ListItem.scss";
import Checkbox from "@material-ui/core/Checkbox";

const ListItem = ({ contact, data }) => {
  const [checked, setChecked] = useState(
    contact.checked ? contact.checked : false
  );

  const handleClick = (event, id) => {
    setChecked(!checked);
    data.find((contact) => contact.id === id)["checked"] = !checked;
  };

  return (
    <li
      className="contact-item"
      onClick={(event, id) => handleClick(event, contact.id)}
    >
      <div className="contact-photo">
        {contact.avatar ? (
          <img
            src={contact.avatar}
            alt={`${contact.first_name} ${contact.last_name}`}
          />
        ) : null}
      </div>
      <div className="contact-info">
        <div className="contact-name">{`${contact.first_name} ${contact.last_name}`}</div>
        <div className="contact-email">{contact.email}</div>
      </div>
      <div className="contact-checkbox">
        <Checkbox
          checked={checked}
          color="default"
          inputProps={{ "aria-label": "checkbox with default color" }}
        />
      </div>
    </li>
  );
};

export default ListItem;
