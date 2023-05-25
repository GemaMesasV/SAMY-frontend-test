import PropTypes from "prop-types";
import { useState } from "react";

import headerLogo from "../../assets/header-logo.png";

import "./style.scss";

function Header({ handleSubmit }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header className="header">
      <a href="/">
        <img
          id="headerLogo"
          src={headerLogo}
          className="header__logo"
          alt="Header logo"
        />
      </a>

      <form onSubmit={(e) => handleSubmit(e, search)}>
        <label htmlFor="searchInput"></label>
        <input
          className="header__form--input"
          type="text"
          id="searchInput"
          placeholder="🔍  You're looking for something?"
          value={search}
          onChange={handleSearch}
        />
      </form>
    </header>
  );
}
Header.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
export default Header;
