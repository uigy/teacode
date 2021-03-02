import React, { useState } from "react";
import "./Header.scss";
import SearchIcon from "@material-ui/icons/Search";

const Header = ({ data, setFoundData }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    setFoundData(() =>
      data.filter((contact) =>
        `${contact.first_name} ${contact.last_name}`
          .toLowerCase()
          .includes(value.toLowerCase())
      )
    );
  };

  return (
    <header>
      <div className="ribbon-contacts">
        <h1>Contacts</h1>
      </div>
      <div className="search">
        <div className="search-icon">
          <SearchIcon />
        </div>
        <input
          className="search-input"
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          value={value}
          onChange={handleChange}
        />
      </div>
    </header>
  );
};

export default Header;
