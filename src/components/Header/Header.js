import React, { useState, useEffect } from "react";
import "./Header.scss";
import SearchIcon from "@material-ui/icons/Search";

const Header = ({ contacts, setFilteredContacts }) => {
  const [inputValue, setInputValue] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(0);

  const handleInputChange = (event) => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    setInputValue(event.target.value);
    setTypingTimeout(
      setTimeout(() => {
        const filteredContacts = contacts.filter((contact) =>
          `${contact.first_name} ${contact.last_name}`
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
        );
        setFilteredContacts(filteredContacts);
      }, 250)
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const search = document.querySelector(".search");
      const ribbonContacts = document.querySelector(".ribbon-contacts");
      if (window.scrollY > search.offsetTop) {
        search.classList.add("search--sticky");
        ribbonContacts.classList.remove("ribbon-contacts--come-out");
      } else {
        search.classList.remove("search--sticky");
        ribbonContacts.classList.add("ribbon-contacts--come-out");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          placeholder="Search contact"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
    </header>
  );
};

export default Header;
